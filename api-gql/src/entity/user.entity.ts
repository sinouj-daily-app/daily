import {CreationOptional, DATE, InferAttributes, InferCreationAttributes, INTEGER, Model, STRING} from "sequelize";
import sequelize from "../server/database";

export class User extends Model<
    InferAttributes<User>,
    InferCreationAttributes<User>
> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

User.init({
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: STRING,
    },
    createdAt: DATE,
    updatedAt: DATE
}, {tableName: 'users', sequelize})