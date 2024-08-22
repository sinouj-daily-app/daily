import {User} from "../../entity";

export const resolver = {
    Query: {
        user: async (_: any, id: number) => {
            return await User.findByPk(id);
        },
        users: async () => {
            return await User.findAll()
        }
    },
    Mutation: {
        createUser: async (_: any, user: User) => {
            let data = await User.create({name: user.name})

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