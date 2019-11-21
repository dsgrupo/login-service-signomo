const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = {
  async validateUser(user) {
    const accountsWithSameEmail = await User.findAndCountAll({
      where: {
        email: user.email,
      },
    });
    if (accountsWithSameEmail.count > 0) {
      return false;
    }
    return true;
  },
  async comparePassword(candidate, original) {
    return bcrypt.compare(candidate, original);
  },
};
