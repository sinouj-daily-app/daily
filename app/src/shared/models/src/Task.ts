import {User} from "./User.ts";

export interface Task {
    id: number,
    authorId: number,
    author: User,
    description: string,
    title: string,
    createdAt: Date,
    updatedAt: Date
}