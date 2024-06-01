import {Task} from "../entity/task.entity";
import {INTEGER, NOW, STRING, TEXT} from "sequelize";
import sequelize from "../server/database";

Task.init({
    id: INTEGER,
    title: STRING,
    description: TEXT,
    createdAt: NOW,
    updatedAt: NOW,
}, {sequelize, tableName: 'tasks'});