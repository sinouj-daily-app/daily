import {CreationOptional, Model} from "sequelize";

export class User extends Model<User> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}