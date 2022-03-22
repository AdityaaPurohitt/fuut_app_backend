import {registerUser} from '../Service/register_service';

// Register User
const register = async (req, res) => {
    try {
      const { body } = req;
      const register_User = await registerUser(body);
  
      res.status(200).send({
        success: true,
        message: "User Registered Successfully.",
        data: register_User,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message || error,
      });
    }
  };
  export {register}