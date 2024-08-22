import {
    CreationOptional, DataTypes, DATE,
    ForeignKey,
    HasManyAddAssociationsMixin,
    InferAttributes,
    InferCreationAttributes, INTEGER,
    Model, TEXT
} from "sequelize";
import {User} from "./user.entity";
import sequelize from "../server/database";

export class Task extends Model<
    InferAttributes<Task>,
    InferCreationAttributes<Task>
> {
    declare id: CreationOptional<number>;
    declare title: string;
    declare author: ForeignKey<User['id']>;
    declare description: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

    declare addTask: HasManyAddAssociationsMixin<Task, number>;
}

Task.init({
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