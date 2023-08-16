export interface Task {
    id: number,
    attributes: Attributes
}

interface Attributes {
    author: string,
    content: string,
    category: number,
    createdAt: Date
}