const User = require('../models/User');
const Review = require('../models/Review');

module.exports = {
  async index(req, res) {
    // eslint-disable-next-line camelcase
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: 'reviews' },
    });

    return res.json(user.reviews);
  },

  async store(req, res) {
    // eslint-disable-next-line camelcase
    const { user_id } = req.params;
    const { description, rating } = req.body;
    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const review = await Review.create({
      user_id,
      description,
      rating,
    });

    return res.json(review);
  },
};
