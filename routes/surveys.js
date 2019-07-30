const express = require('express');
const router = express.Router();
const Survey = require('../models/survey');

router.get('/', (req, res) => {
  Survey.find().then(surveys => {
    res.render('surveys/list', { surveys, title: 'Water Survey' });
    // res.json(surveys);
  });
});

router.get('/create', (req, res) => {
  res.render('surveys/create', {});
});

router.post('/create', async (req, res) => {
  const body = req.body;

  const newSurvey = new Survey(body);
  const createdSurvey = await newSurvey.save(); // Does not exist until we save

  // Redirect to newly created survey
  res.redirect(`/surveys/${createdSurvey._id}`);
});

router.get('/:id/delete', async (req, res) => {
  const id = req.params.id; // Get id from params

  await Survey.findByIdAndDelete(id);

  return res.redirect('/surveys');
});

router.post('/:id/edit', async (req, res) => {
  const id = req.params.id; // Get id from params
  const body = req.body;

  const newSurvey = await Survey.findByIdAndUpdate(id, body);

  // Redirect to newly created survey
  res.redirect(`/surveys/${id}`);
});

router.get('/:id/edit', async (req, res, next) => {
  const id = req.params.id; // Get id from params

  // Find Survey by it's primary ID
  const survey = await Survey.findById(id).catch(error => {
    return next(error);
  });

  // Render Details page from views/Surveys
  res.render('surveys/edit', { survey });
});

router.get('/:id', async (req, res, next) => {
  const id = req.params.id; // Get id from params

  // Find Survey by it's primary ID
  const survey = await Survey.findById(id).catch(error => {
    return next(error);
  });

  // Render Details page from views/Surveys
  res.render('surveys/details', { survey });
});

module.exports = router;