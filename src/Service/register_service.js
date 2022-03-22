import { taskModal } from "../Config/config";
import { hashPassword } from "../Utils/hashPassword";


// Register
const registerUser = async data => {
  const isExist = await taskModal.findOne({ email: data.email });
  if (isExist) {
    throw new Error("User is already exist!!");
  } else {
    // Encript password using bcrypt
    const password = await hashPassword(data.password);
    const createUser = {
      ...data,
      password,
    };
    const createNewUser = await taskModal.create(createUser);
    if (!createNewUser) {
      throw new Error("Something went wrong!, please try again");
    } else {
      return createNewUser;
    }
  }
};

export {registerUser}  