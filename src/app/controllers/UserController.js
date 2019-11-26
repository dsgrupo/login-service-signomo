const User = require('../models/User');

module.exports = {
  async update(req, res) {
    // eslint-disable-next-line camelcase
    const { user_id } = req.params;
    const { name, email, password, birthDate, birthTime } = req.body;
    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    user.update({
      name,
      email,
      password,
      birthDate,
      birthTime,
    });

    return res.json(user);
  },
};
