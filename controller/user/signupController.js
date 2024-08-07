const { signupData } = require("../../model/User/signupmodel");
const { AgentsignupDatas } = require("../../model/Agent/AgentSignupmodel");
const sendEmail = require("../../utils/otp");
const jwt = require("jsonwebtoken");

let UserOtp;
let TypeIs;

module.exports = {
  SignupPost: async (req, res) => {
    try {
      const { Name, email, password, type } = req.body;

      let Data;
      if (type === "User") {
        Data = { name: Name, email, password };
        req.session.email = email;
        console.log(req.session.email, "session email in user");

        TypeIs = type;
        const newData = new signupData(Data);
        await newData.save();
      } else if (type === "Agent") {
        Data = { name: Name, email, password };
        req.session.email = email;
        console.log(req.session.email, "session email in agent");

        TypeIs = type;
        const newData = new AgentsignupDatas(Data);
        await newData.save();
      } else {
        return res
          .status(400)
          .json({ success: false, message: "Invalid type" });
      }

      const emailToSend = req.session.email;
      console.log(emailToSend, "session email");

      if (!emailToSend) {
        throw new Error("Email not found in session");
      } else {
        const generateOTP = Math.floor(1000 + Math.random() * 9000);
        UserOtp = generateOTP;

        console.log(UserOtp, "this is generated otp");

        // Call the imported sendEmail function
        await sendEmail(emailToSend, UserOtp);

        res.status(200).json({ success: true });
      }
    } catch (error) {
      console.log(error, "error in signup post");
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  otpPost: async (req, res) => {
    try {
      const checkOtpData = req.body;

      const userOtp = parseInt(
        `${checkOtpData.otp1}${checkOtpData.otp2}${checkOtpData.otp3}${checkOtpData.otp4}`,
        10
      );
      console.log(UserOtp, "  generated otp");

      // code clear
      if (userOtp === UserOtp) {
        res
          .status(200)
          .json({ success: true, TypeIs: TypeIs, message: "OTP verified" });
        console.log("OTP verified");
      } else {
        res.status(400).json({ success: false, message: "Invalid OTP" });
        console.log("Invalid OTP");
      }
    } catch (error) {
      console.log(error, "error in otp post");
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  loginPost: async (req, res) => {
    try {
      const { email, password } = req.body;
      const userExisit = await signupData.findOne({ email: email });
      const agentExisit = await AgentsignupDatas.findOne({ email: email });

      if (!userExisit && !agentExisit) {
        return res
          .status(401)
          .json({ success: false, message: "please create a account" });
      }

      const checkExisit = userExisit || agentExisit;
      const passwordVerification = checkExisit.password == password;
      const role = userExisit ? "user" : "agent";

      if (!passwordVerification) {
        return res
          .status(401)
          .json({ success: false, message: "incorrect password" });
      }

      if (checkExisit && passwordVerification) {
        const payload = {
          userId: checkExisit._id,
          role: role,
        };
        const token = jwt.sign(payload, process.env.jwt);
        return res.status(200).json({ role: role, token });
      }
    } catch (error) {}
  },
};
