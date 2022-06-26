import { Sequelize } from "sequelize";

const DbName = process.env.DB_NAME!;
const DbUser = process.env.DB_USER!;
const DbPass = process.env.DB_PASS;
const DbHost = process.env.DB_HOST;

const sequelize = new Sequelize(
    DbName,
    DbUser,
    DbPass,
    {
        host: DbHost,
        dialect: 'mysql'
    }
)

export default sequelize;