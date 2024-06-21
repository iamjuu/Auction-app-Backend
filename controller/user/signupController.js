const { signupData } = require("../../model/User/signupmodel");
const { AgentsignupDatas } = require('../../model/Agent/AgentSignupmodel');

module.exports = {
  SignupPost: async (req, res) => {
    try {
      const { Name, email, password, type } = req.body;
      req.session.email = email

      if (type === "User") {
        const Data = {
          name: Name,
          email: email,
          password: password,
        };
        const newData = new signupData(Data);
        await newData.save();
        res.status(200).json({ success: true });
      } else if (type === "Agent") {
        const Data = {
          name: Name,
          email: email,
          password: password,
        };
        const newData = new AgentsignupDatas(Data);
        await newData.save();
        res.status(200).json({ success: true });
      } else {
        res.status(400).json({ success: false, message: 'Invalid type' });
      }
    } catch (error) {
      console.log(error, "error in signup post");
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  },
};
