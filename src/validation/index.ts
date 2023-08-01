import { ProjectModel } from '@/models'
import * as yup from 'yup'

const projectFormValidation = yup.object<ProjectModel>({
    title:yup.string().required("field title is requeried"),
    description:yup.string().required("field description is requeried"),
    image:yup.mixed().required("the field image is requeried"),
    liveSiteUrl:yup.string().required("website title is requeried"),
    githubUrl:yup.string().required("field github is requeried"),
    category:yup.string().required("field category is requeried"),
}) 
export {projectFormValidation}