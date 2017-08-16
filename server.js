const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require("express-handlebars");
const db = require('./models');

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
// app.use(express.static("public"));

// Import routes and give the server access to them.
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});