const Sequelize = require('sequelize');

const connection = new Sequelize('birdietest', 'test-read', 'xnxPp6QfZbCYkY8', {
    host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
    dialect: 'mysql',
    port: 3306,
    define: {
        timestamps: false
    }
});

connection
    .authenticate()
    .then(() => {
        console.log("Successful connection to the DB!");
    })
    .catch((err: any) => {
        console.log("Error connecting to the DB: ", err);
    });


interface dbInstance {
    [x: string]: any;
    Sequelize: any,
    instance: any
}

const dbInstance : dbInstance = {
    Sequelize: Sequelize,
    instance: connection
};

dbInstance.events = require('../model/event')(Sequelize, connection);

export const db = dbInstance;