const connection = require("./connection.js");

// Object Relational Mapper (ORM)

const orm = {
	selectAll: function(table, cb) {
		let queryString = `SELECT * FROM ${table};`;
		connection.query(queryString, (err, result) => {
			if (err) throw err;

			console.log(result);
			cb(result);
		});
	},

	create: function(table, val, cb) {
		let queryString = `INSERT INTO ${table} (burger_name)`;
		queryString += ` VALUES ("${val}");`;

		console.log(queryString);
		connection.query(queryString, (err, result) => {
			if (err) throw err;

			cb(result);
		});
	},

  update: function(table, condition, cb) {
		let queryString = `UPDATE ${table}`;
		queryString += ` SET devoured=true`;
		queryString += ` WHERE id=${condition};`;

		console.log(queryString);
		connection.query(queryString, (err, result) => {
			if (err) throw err;

			cb(result);
		});
  }
};

module.exports = orm;