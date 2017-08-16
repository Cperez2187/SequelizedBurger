module.exports = function(sequelize, DataTypes) {
  let Burger = sequelize.define("Burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: 0
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false
		}
  });
  
  return Burger;
};