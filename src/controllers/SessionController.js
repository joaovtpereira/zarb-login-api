const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email, password },
    });
    console.log(user)

    if (!user) {
      return res.status(401).json({ error: 'E-mail ou senha inválidos.' });
    }

    return res.status(200).json({
      user,
    });
  }
}