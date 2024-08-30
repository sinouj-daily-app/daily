import {CreationOptional, DATE, InferAttributes, InferCreationAttributes, INTEGER, Model, STRING} from "sequelize";
import sequelize from "../server/database";
import {TaskModel} from "./task.entity";

export class UserModel extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

UserModel.init({
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

UserModel.hasMany(TaskModel, {
    foreignKey: 'authorId',
})

TaskModel.belongsTo(UserModel, {foreignKey: 'authorId'})