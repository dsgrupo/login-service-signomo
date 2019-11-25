const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        birthDate: DataTypes.STRING,
        birthTime: DataTypes.STRING,
      },
      {
        scopes: {
          withoutPassword: {
            attributes: { exclude: ['password'] },
          },
        },
        hooks: {
          async beforeCreate(user) {
            const hash = await bcrypt.hash(user.password, 10);
            user.password = hash;
          },
        },
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Review, { foreignKey: 'user_id', as: 'reviews' });
  }
}

module.exports = User;
