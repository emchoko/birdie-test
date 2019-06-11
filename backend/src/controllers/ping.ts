import * as express from "express";

export const pingController = express.Router();

pingController.get('/hello', (_, res) => {
  res.status(200).json({
    greetings: 'Thank you for spending some time on this test. All the best 🙌'
  });
});

// Code for Birdie test begins here

//Gets all the unique recipients from the database 
pingController.get('/recipient', (_, res) => {
  res.status(200).json({
    recipients: 'patient 1 2 3'
  });
});