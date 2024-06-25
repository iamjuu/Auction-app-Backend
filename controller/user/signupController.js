const {signupData}= require('../../model/User/signupmodel')
const {AgentsignupDatas}= require('../../model/Agent/AgentSignupmodel')
const sendmail = require('../../utils/otp');

let UserOtp; 


module.exports = {
  SignupPost: async (req, res) => {
    try {
      const { Name, email, password, type } = req.body;

      if (type === "User") {
        const Data = { name: Name, email, password };
        req.session.email = email;
        console.log(req.session.email, 'session email in user');

        const newData = new signupData(Data);
        await newData.save();
        res.status(200).json({ success: true });
      } else if (type === "Agent") {
        const Data = { name: Name, email, password }
        req.session.email = email;
        console.log(req.session.email, 'session email in agent ');

        const newData = new AgentsignupDatas(Data);
        await newData.save();
        res.status(200).json({ success: true });
      } else {
        res.status(400).json({ success: false, message: 'Invalid type' });
      }

      const emailToSend = req.session.email;
      console.log(emailToSend, 'session email');

      if (!emailToSend) {
        throw new Error("Email not found in session");
      }

      const generateOTP = Math.floor(1000 + Math.random() * 9000);
      UserOtp= generateOTP
      
      console.log( UserOtp,'req otp');
      await sendmail(emailToSend, UserOtp);
    } catch (error) {
      console.log(error, "error in signup post");
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  },

  otpPost: async (req, res) => {
    try {
      const checkOtpData = req.body;
      console.log(UserOtp ," saved otp");
  
      const userOtp = parseInt(`${checkOtpData.otp1}${checkOtpData.otp2}${checkOtpData.otp3}${checkOtpData.otp4}`, 10);
     
  
      if (userOtp === UserOtp) {
        res.status(200).json({ success: true, message: 'OTP verified' });
        console.log('OTP verified');
      } else {
        res.status(400).json({ success: false, message: 'Invalid OTP' });
        console.log('Invalid OTP');
      }
    } catch (error) {
      console.log(error, 'error in otp post');
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  },
};
