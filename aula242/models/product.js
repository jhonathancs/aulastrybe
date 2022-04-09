module.exports = (sequelize, DataTypes) => {
  
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, { timestamps: false });

  return Product;
};