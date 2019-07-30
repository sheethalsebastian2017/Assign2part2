/*File Name; index.js
  Author; Sheethal Sebastian, Amal Baiju, Manu Cheriyan
  Website Name; survey site
  Description; Site structure
  */
var express = require('express');
var surveys = require('./controllers/surveys');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Survey' });
});

const requireAuth = (req, res, next) => {
  if (req.isAuthenticated()) return next();

  return res.redirect('/login');
};
router.post('*', requireAuth); // Protect ALL POST routes

// Render create form (GET)
// Survey new survey from un authed users
router.get('/surveys/new', requireAuth, (req, res) =>
  res.render('surveys/create')
);

// List all Surveys (GET)
router.get('/surveys', surveys.findAllSurveys);
// List a specific Survey (GET)
router.get('/surveys/:id', surveys.findSurveyById('surveys/details'));

// Require auth on every route below this router
router.use(requireAuth);

// Handle create form (POST)
router.post('/surveys/new', surveys.createNewSurvey);
// Render edit form (GET)
router.get('/surveys/:id/edit', surveys.findSurveyById('surveys/edit'));

// Handle edit form (POST)
router.post('/surveys/:id/edit', surveys.updateSurveyById);
// Delete a Survey (GET)
router.get('/surveys/:id/delete', surveys.deleteSurveyById);

module.exports = router;