const Survey = require('../../models/survey');

// Surveys CRUD
// Creating
// Create a new Survey
exports.createNewSurvey = async (req, res) => {
  const body = req.body;
  const survey = await new Survey(body).save();
  res.redirect(`/surveys/${survey._id}`);
};

// Reading
// Find a Survey by it's ID
// /surveys/:id
// exports.findSurveyById = function(viewPath) {
//   return function(req, res) {
//     const id = req.params.id;
//     const survey = await Survey.findById(id);
//     res.render(viewPath, { survey });
//   }
// }
exports.findSurveyById = viewPath => async (req, res) => {
  const id = req.params.id;
  const survey = await Survey.findById(id);
  res.render(viewPath, { survey });
};
// Old findSurveyById
// exports.findSurveyById = async (req, res) => {
//   const id = req.params.id;
//   const survey = await Survey.findById(id);
//   res.render('surveys/details', { survey });
// };

// Find all Surveys
exports.findAllSurveys = async (req, res) => {
  const surveys = await Survey.find();
  res.render('surveys/list', { surveys });
};

// Updating
// Update a survey based on it's ID
exports.updateSurveyById = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const survey = await Survey.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true
  });
  res.redirect(`/surveys/${survey._id}`);
};

// Deleting
// Delete a survey based on it's ID
exports.deleteSurveyById = async (req, res) => {
  const id = req.params.id;
  await Survey.findByIdAndDelete(id);
  res.redirect('/surveys');
};