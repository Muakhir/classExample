import  express  from "express";
import { Person } from "./person.js";

const app = express();
const router = express.Router();
const port = +process.env.PORT || 4000

app.use(express.json(),router)

router.get('^/$|/class',(req, res) =>{
    res.json({
        status: res.statusCode,
        msg: "You're Home"
    })
})

router.get('/person1',(req, res) =>{
    let person1 = new Person()
    person1.firstname = "John"
    person1.lastname = "smith"
    person1.display()
    res.end('please check the console')
})

router.get('/person2',(req, res) =>{
    let person2 = new Person()
    person2.firstname = "Michael"
    person2.lastname = "James"
    person2.display()
    res.end('please check the console')
})

app.listen(port,()=>{console.log(`Sever is running on Port: ${port}`);})