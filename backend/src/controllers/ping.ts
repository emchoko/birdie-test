import * as express from "express";
const db = require('../config/db').db;
// const Sequelize = dbInstance.Sequelize;
export const pingController = express.Router();

pingController.get('/hello', (_, res) => {
  res.status(200).json({
    greetings: 'Thank you for spending some time on this test. All the best 🙌'
  });
});

// Code for Birdie test begins here

// Retrieve all the unique recipients from the database 
pingController.get('/recipient', (_, res) => {
  db.events.aggregate('care_recipient_id', 'DISTINCT', {plain: false})
  .then((dbResult: any) => {
    res.json(dbResult);
  })
  .catch((err: any) => {
    return res.json(err);
  });
});

