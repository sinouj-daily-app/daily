export interface Task {
    id: number,
    attributes: {
        author: string,
        content: string,
        category: number,
        createdAt: Date
    }
}