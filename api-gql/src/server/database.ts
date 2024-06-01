import { Sequelize} from "sequelize";
import dotenv from "dotenv";

const env = dotenv.config().parsed;

const sequelize = new Sequelize(
    process.env.DATABASE_NAME || env.DATABASE_NAME,
    process.env.DATABASE_USERNAME || env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD || env.DATABASE_PASSWORD,
    {
        host: 'localhost',
        port: +process.env.DATABASE_PORT || +env.DATABASE_PORT,
        dialect: 'postgres',
        logging: false,
    },
)

export default sequelize;