const { signupData } = require("../../model/User/signupmodel");
const { AgentsignupDatas } = require('../../model/Agent/AgentSignupmodel');
const sendmail = require('../../utils/otp');

module.exports = {
  SignupPost: async (req, res) => {
    try {
      const { Name, email, password, type } = req.body;

      if (type === "User") {
        const Data = {
          name: Name,
          email: email,
          password: password,
        };
        req.session.email = email;
        console.log(  req.session.email,'session email  in user');

        const newData = new signupData(Data);
        await newData.save();
        res.status(200).json({ success: true });
      } else if (type === "Agent") {
        const Data = {
          name: Name,
          email: email,
          password: password,
        };
        req.session.email = email;
        console.log(  req.session.email,'session email  in agent ');
        const newData = new AgentsignupDatas(Data);
        await newData.save();
        res.status(200).json({ success: true });
      } else {
        res.status(400).json({ success: false, message: 'Invalid type' });
      }


      // OTP sending
      const emailToSend = req.session.email;
      console.log(emailToSend, 'session email'); // Debugging line

      if (!emailToSend) {
        throw new Error("Email not found in session");
      }

      const generateOTP = Math.floor(1000 + Math.random() * 9000);
      console.log(generateOTP,'otp');
      req.session.otp = generateOTP;





      
      await sendmail(emailToSend, generateOTP);

    } catch (error) {
      console.log(error, "error in signup post");
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  },
};
