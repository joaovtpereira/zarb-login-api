const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.create({ email, password });

    return res.json(user);
  },

  async update(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email} });
      const updated = await User.update(req.body, {
        where: { id: user.id }
      });
      if (updated) {
        const updatedPost = await User.findOne({ where: { email, password } });
        return res.status(200).json({ post: updatedPost });
      }
      throw new Error('Post not found');
    } catch (error) {
      return res.status(401).send(error.message);
    }
  },
}