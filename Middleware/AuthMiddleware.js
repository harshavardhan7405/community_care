const jwt = require("jsonwebtoken");
const User = require("../model/UserModel");
require("dotenv").config();

const userVerification = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json({ status: false });

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) return res.json({ status: false });

      const user = await User.findById(data.id);
      if (user) return res.json({ status: true, user: user.username });
      else return res.json({ status: false });
    });
  } catch (error) {
    return res.json({ status: false, error: error.message });
  }
};

module.exports = { userVerification };
