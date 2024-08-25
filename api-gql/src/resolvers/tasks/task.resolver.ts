import {Task} from '../../entity';

export const resolver = {
    Query: {
        tasks: async (_: any, __: any) => {
            return await Task.findAll();
        },
        task: async (_: any, {id}: any) => {
            return await Task.findByPk(id);
        },
    },
    Mutation: {
        addTask: async (_: any, task: Task) => {
            let data = await Task.create({title: task.title, author: task.author})

            return {
                code: 200,
                success: true,
                task: {
                    title: data.title,
                    author: data.author
                }
            };
        },
    }
}