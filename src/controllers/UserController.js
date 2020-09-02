const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },
  async store(req, res) {
    const { name, email, password } = req.body;
    
    const existUser = await User.findOne({ where: { email} });

    if(existUser){
      return res.status(401).json("Email já cadastrado");
    }

    const user = await User.create({ name, email, password });

    return res.status(200).json(user);
  },

  async update(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email} });

      if(!user){
        return res.status(401).json("Email Incorreto");
      }
  
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