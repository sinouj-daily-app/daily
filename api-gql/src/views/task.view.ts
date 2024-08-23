import { Task } from "../entity";
import {INTEGER, NOW, STRING, TEXT} from "sequelize";
import sequelize from "../server/database";

Task.init({
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: STRING,
    description: TEXT,
    createdAt: NOW,
    updatedAt: NOW,
}, {sequelize, tableName: 'tasks'});