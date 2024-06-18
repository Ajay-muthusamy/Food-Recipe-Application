import express from "express";
import DBconnect from "./Database/db.js";
import Foodrouter from "./routers/routes.js";
import cors from 'cors'

const app = express();
const PORT = 6969;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

DBconnect();

app.get('/',(req,res)=>{
    res.send('ajay');
})

app.use('/food',Foodrouter);


app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});