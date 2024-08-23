export interface Task {
    id: number,
    attributes: Attributes
}

interface Attributes {
    author: string,
    content: string,
    category: string,
    createdAt: Date
}