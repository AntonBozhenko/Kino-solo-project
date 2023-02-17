const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AllLike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  AllLike.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    year: DataTypes.STRING,
    rating: DataTypes.STRING,
    movieLength: DataTypes.STRING,
    poster: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'AllLike',
  });
  return AllLike;
};
