import {
    CreationOptional, DataTypes, DATE,
    ForeignKey,
    HasManyAddAssociationsMixin,
    InferAttributes,
    InferCreationAttributes, INTEGER,
    Model, NonAttribute, TEXT
} from "sequelize";
import {UserModel} from "./user.entity";
import sequelize from "../server/database";

export class TaskModel extends Model<
    InferAttributes<TaskModel>,
    InferCreationAttributes<TaskModel>
> {
    declare id: CreationOptional<number>;
    declare title: string;
    declare authorId: ForeignKey<UserModel['id']>;
    declare author?: NonAttribute<UserModel>
    declare description: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

    declare addTask: HasManyAddAssociationsMixin<TaskModel, number>;
}

TaskModel.init({
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    description: TEXT,
    createdAt: DATE,
    updatedAt: DATE,
}, {tableName: 'tasks', sequelize});