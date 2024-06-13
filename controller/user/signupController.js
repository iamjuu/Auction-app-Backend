const { signupData } = require("../../model/User/signupmodel");
module.exports = {
  SignupPost: async (req, res) => {
    try {
      console.log("ajmal");

      const { Name, email, password } = req.body;
      const Data = {
        name: Name,
        email: email,
        password: password,
      };
      console.log(Data, "signup data");
      const newData = new signupData(Data);
      await newData.save();
      res.status(200).json({ success: true });
    } catch (error) {
      console.log(error, "error in signup post");
    }
  },
};
