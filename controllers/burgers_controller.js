const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

// Set up routes
// Get and display all burgers
router.get('/', (req, res) => {
	burger.all(burger_data => {
		console.log(burger_data);
		res.render('index', {burger_data});
	});
});

// Update burger after devoured
router.put('/burgers/update', (req, res) => {
	burger.update(req.body.burger_id, (result) => {
		console.log(result);
		res.redirect('/');
	});
});

// Add a new burger to the database and render it
router.post('/burgers/create', (req, res) => {
	burger.create(req.body.burger_name, (result) => {
		res.redirect('/');
	});
});



// Export routes for server.js to use
module.exports = router;