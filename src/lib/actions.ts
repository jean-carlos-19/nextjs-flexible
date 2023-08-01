import {GraphQLClient} from 'graphql-request'
import {createProjectMutation, createUserMutation, deleteProjectMutation, getProjectByIdQuery, getProjectsOfUserQuery, getUserQuery, projectsQuery, updateProjectMutation} from '@/graphql'
import { ProjectForm } from '@/types/common.types';
import {Http} from '@/services/http'
import { ProjectModel } from '@/models';

const http:Http = Http.getInstance();


const isProduction = process.env.NODE_ENV === "production";
const apiUrl = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || "" : "http://127.0.0.1:4000/graphql";
const apiKey = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || "" : "letmein";
const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : "http://localhost:3000";

const client = new GraphQLClient(apiUrl)

const fetchToken = async ()=>{
   try {
    const response = await fetch(`${serverUrl}/api/auth/token`);
    return response.json();
   } catch (error) {
        throw error;
   }
}

const makeGraphQLRequest = async (query:string,variable:{})=>{
    try {
        return await client.request(query,variable)
    } catch (error) {
        throw error;
    }
}
const getUser = (email:string) =>{
    client.setHeader("x-api-key", apiKey)
    return makeGraphQLRequest(getUserQuery,{email});
}
const createUser = (name:string, email:string, avatarUrl:string) =>{
    client.setHeader("x-api-key",apiKey)
    const variables = {
        input:{
            name,email,avatarUrl
        }
    }
    return makeGraphQLRequest(createUserMutation,variables);
}

const createNewProject = async (form:ProjectModel,creatorId:string,token:string,urlImage:string)=>{
    client.setHeader("Authorization",`Bearer ${token}`)
    
    const imgUrl:any = await uploadImage(urlImage);
    if(imgUrl.url) {
        const variables ={
            input:{
                ...form,
                image:imgUrl.url,
                createdBy:{
                    link:creatorId
                }
            }
        }
        return makeGraphQLRequest(createProjectMutation,variables)
    }
}
const uploadImage = async (imagePath:string)=>{
    try {
        const response = await fetch(`${serverUrl}/api/upload`, {
            method: "POST",
            body: JSON.stringify({
              path: imagePath,
            }),
          });
        return response.json();
    } catch (error) {
        throw error;
    }
}

const fecthAllProjects = (category?:string, endcursor?:string)=>{
    client.setHeader("x-api-key",apiKey)
    return makeGraphQLRequest(projectsQuery,{category,endcursor})
}

const getProjectDetails = (id:string)=>{
    client.setHeader("x-api-key",apiKey);
    return makeGraphQLRequest(getProjectByIdQuery,{id});
}

const getUserProjects = (id:string,last?:number)=>{
    client.setHeader("x-api-key",apiKey);
    return makeGraphQLRequest(getProjectsOfUserQuery,{id,last});
}

const deleteProject = (id:string,token:string)=>{
    client.setHeader("Authorization",`Bearer ${token}`)
    return makeGraphQLRequest(deleteProjectMutation,{id});
}

const updateProject = async (form:ProjectModel,projectId:string,token:string,urlImage:string,oldUrlImage:string)=>{
    
    let updateForm = {...form}
    if(urlImage !== oldUrlImage){
        const imgUrl:any = await uploadImage(urlImage);

        if(imgUrl.url) {
            updateForm={
                ...form,
                image:imgUrl.url
            }
        }
    }
    const variable = {
        id:projectId,
        input:updateForm
    }
    
    client.setHeader("Authorization",`Bearer ${token}`)
    return makeGraphQLRequest(updateProjectMutation,variable);
}

export {
    getUser,
    createUser,
    createNewProject,
    fetchToken,
    fecthAllProjects,
    getProjectDetails, 
    getUserProjects,
    deleteProject,
    updateProject
}