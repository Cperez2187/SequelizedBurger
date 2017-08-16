// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
let db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Set up routes
  // Get and display all burgers
  app.get('/', function(req, res) {
    console.log('db.Burger: ' + db.Burger);
    db.Burger.findAll().then(burgerData => {
      res.render('index', {burgerData});
    });
  });

  // Update burger after devoured
  app.put('/burgers/update', (req, res) => {
    console.log(`Devoured: ${req.body.devoured}`);
    // db.Burger.update({
    //   devoured: req.body.devoured
    // }, {
    //   where: {
    //     id: req.body.id
    //   }
    // }).then(burgerData => {
    //   res.redirect('/');
    // });
  });

  // Add a new burger to the database and render it
  app.post('/burgers/create', (req, res) => {
    // db.Burger.create({
    //   burger_name: req.body.burger_name
    // }).then(burgerData => {
    //   res.redirect('/');
    // });
  });
};
