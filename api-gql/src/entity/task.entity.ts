import {CreationOptional, ForeignKey, InferAttributes, InferCreationAttributes, Model} from "sequelize";
import {User} from "./user.entity";

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
}