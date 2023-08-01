"use client";
import { useState, useCallback, useEffect } from "react";
import { ProjectModel } from "@/models";
import { FormikHelpers } from "formik";
import { ProjectInterface, SessionInterface } from "@/types/common.types";
import { createNewProject, fetchToken, updateProject } from "@/lib/actions";
import { useRouter } from "next/navigation";

const useProjectForm = (session: SessionInterface, project: ProjectInterface | undefined) => {

    const router = useRouter();
    const [urlImage, setUrlImage] = useState<string | undefined>();
    const [entity, setEntity] = useState<ProjectModel>({
        title: undefined,
        category: undefined,
        description: undefined,
        githubUrl: undefined,
        image: undefined,
        liveSiteUrl: undefined
    });
    useEffect(() => {
        (async (urlImage: string) => {
            const fileImage = await fetch(urlImage);
            const blob = await fileImage.blob();
            let file = new File([blob], blob.name, { type: blob.type, })
            setEntity({
                title: project?.title,
                category: project?.category,
                description: project?.description,
                githubUrl: project?.githubUrl,
                //@ts-ignore
                image: file,
                liveSiteUrl: project?.liveSiteUrl
            });
            setUrlImage(project?.image);

        })(project?.image!);


    }, [project?.title])
    const create = useCallback(async (values: ProjectModel, urlImage: string) => {
        try {
            const { token } = await fetchToken();
            await createNewProject(values, session?.user?.id, token, urlImage)
            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }, [])

    const edit = useCallback(async (values: ProjectModel, urlImage: string,oldUrlImage:string) => {
        try {
            const { token } = await fetchToken();
            await updateProject(values, project?.id!, token, urlImage,oldUrlImage)
            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }, [])

    const handleSend = (values: ProjectModel, formikHelpers: FormikHelpers<ProjectModel>, type: "create" | "edit", urlImage: string, oldUrlImage:string) => {
        if (type === "create") create(values, urlImage);
        if (type === "edit") edit(values, urlImage,oldUrlImage);
    }
    return { entity, handleSend, urlImage, setUrlImage };
}
export { useProjectForm }