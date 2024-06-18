import express from 'express'
import { FoodAdd } from '../controller/controller.js'
import { adminblogupdate } from '../src/component/Admin_Dashboard/admindatabase/adminController.js';
import { blogdetailupdate } from '../src/component/Admin_Dashboard/admindatabase/adminController.js';
import { delteblog } from '../src/component/Admin_Dashboard/admindatabase/adminController.js';
import { RegisterAcc } from '../controller/controller.js';
import { RegisterCheck } from '../controller/controller.js';

const Foodrouter = express.Router();

Foodrouter.post("/add",FoodAdd);
Foodrouter.post("/blog",adminblogupdate);
Foodrouter.get("/display",blogdetailupdate);
Foodrouter.delete('/delete/:id',delteblog);
Foodrouter.post("/api/register",RegisterAcc );
Foodrouter.post("/api/login",RegisterCheck);


export default Foodrouter;