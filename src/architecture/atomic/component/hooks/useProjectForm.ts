import { useState } from "react";
import { ProjectModel } from "@/models";

const useProjectForm = () => {
    const [entity] = useState<ProjectModel>({
        title: undefined,
        category: undefined,
        description: undefined,
        githubUrl: undefined,
        image: undefined,
        liveSiteUrl: undefined
    });
    return {entity};
}
export { useProjectForm }