import express from "express";
import {register} from '../Controller/register_controller';

const routers = express
  .Router()
  .post("/register", register)

  export { routers };
