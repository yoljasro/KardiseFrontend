// types.ts
export interface Project {
    _id?: string;
    title: string;
    description: string;
    image: string;
    __v?: number;
}

export interface ApiResponse {
    projects: Project[];
}
