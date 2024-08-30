import {TaskModel, UserModel} from '../../entity';

export const resolver = {
    Query: {
        tasks: async (_: any, __: any) => {
            return await TaskModel.findAll()
        },
        task: async (_: any, {id}: any) => {
            return await TaskModel.findByPk(id);
        },
    },
    Task: {
        author: async (parent: any) => {
            return await UserModel.findByPk(parent.authorId);
        }
    },
    Mutation: {
        addTask: async (_: any, task: TaskModel) => {
            let data = await TaskModel.create({title: task.title, authorId: task.authorId})

            return {
                code: 200,
                success: true,
                task: {
                    title: data.title,
                    author: data.authorId
                }
            };
        },
    }
}