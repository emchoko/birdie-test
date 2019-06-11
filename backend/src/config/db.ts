const Sequelize = require('sequelize');

const connection = new Sequelize('birdietest', 'test-read', 'xnxPp6QfZbCYkY8', {
    host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
    dialect: 'mysql',
    port: 3306
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
    Sequelize: any,
    instance: any
}

const dbInstance : dbInstance = {
    Sequelize: Sequelize,
    instance: connection
};
//TODO: put event instance in the db
export const db = dbInstance;