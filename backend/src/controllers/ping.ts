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

/**
 * Retrieves all the unique recipients from the database 
 */
pingController.get('/recipient', (_, res, next) => {
  db.events.aggregate('care_recipient_id', 'DISTINCT', { plain: false })
    .then((dbResult: any) => {
      res.json(dbResult);
    })
    .catch((err: any) => {
      next(err);
    });
});


/**
 * Retrieve care recipient events for particular day
 */
pingController.get('/recipient/:recipient_id', (req, res, next) => {
  db.events.findAll({
    where: {
      recipient_id: req.params.recipient_id,
      timestamp: {
        $between: [req.query.startDate, req.query.endDate]
      }
    }
  })
  .then((dbResult: any) => {
    res.status(200).json(dbResult);
  })
  .catch((err: any) => {
    next(err);
  });
});