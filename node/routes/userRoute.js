import express from "express";
const router = express.Router();

import{ register_action, login_action, get_profiles } from "../controllers/userController.js";

router.get('/',(req,res)=>{
    res.send("user route called");
})
// router.post("/singup" , (req,res)=>{
    // console.log(req.body);
    // res.send({msg:"singup route called"})
//     const {username ,useremail,userpassword} = req.body;

//     if(!username || !useremail || !userpassword){
//         return res.status(422).json({error:"plzz filled the filed property"});
//     }
     
// })



// router.post("/singin" , (req,res)=>{
//     console.log(req.body);
//     res.send({msg:"singin route called"})
// })

router.post("/profiles" , (req,res)=>{
    console.log(req.body);
    res.send({msg:"profiles route called"})
})
router
.post("/singup" , register_action)
.post("/singin" , login_action)
.get("/profiles" , get_profiles)





export default router;
