import {UserModel} from "../../entity";

export const resolver = {
    Query: {
        author: async (_: any, user: UserModel) => {
            return await UserModel.findByPk(user.id);
        },
        authors: async () => {
            return await UserModel.findAll()
        }
    },
    Mutation: {
        createUser: async (_: any, user: UserModel) => {
            let data = await UserModel.create({name: user.name})

            return {
                code: 200,
                success: true,
                user: {
                    name: data.name,
                }
            };
        }
    }
}