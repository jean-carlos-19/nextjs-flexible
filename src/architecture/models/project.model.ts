import { File } from "buffer";

interface ProjectModel {
    title: string | undefined;
    description: string | undefined;
    image: File | undefined;
    liveSiteUrl: string | undefined;
    githubUrl: string | undefined;
    category: string | undefined;
}
export type {ProjectModel}