const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PrivateLike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  PrivateLike.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    year: DataTypes.STRING,
    rating: DataTypes.STRING,
    movieLength: DataTypes.STRING,
    poster: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'PrivateLike',
  });
  return PrivateLike;
};
