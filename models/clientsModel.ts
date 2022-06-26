import db from "../db";
import Sequelize from 'sequelize';

export type Clients = {
    id: number,
    name: string,
    email: string
}

export default db.define('client', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})