import userM from "../models/userModel.js";

import jwt from 'jsonwebtoken';


import bcrypt from 'bcryptjs';


const login_action = async(req,res)=>{
    // console.log(req.body);
    // res.json({message:"ok"});
    try{
        // let token;
        const {useremail, userpassword} = req.body;
        if(!useremail ||!userpassword){
            return res.status(400).json({error:"plzz filled the data" , status:false})
        }

        const userLogin = await userM.findOne({useremail:useremail});

        // console.log(userLogin);
         if (userLogin){
            
        const isMatch = await bcrypt.compare(userpassword , userLogin.userpassword);

        let token =  await userLogin.generateAuthToken();

        console.log(token);

        // res.cookie("jwtoken" ,token,{
        //     expires:new Date(Date.now() + 25892000000),
        //     httpOnly:true
        // });

        if (!isMatch){

        res.status(400).json({error:"Invalid user pass ",status:false});
    
    }else{
        res.json({message:"user Singin Successfully" , token:token,status:true});
    }

    }else{

        res.status(400).json({error:"Invalid user ",status:false});

         }

    }catch(err){
        console.log(err);
    }

}

const register_action= async(req,res)=>{
    const {username ,useremail,userpassword} = req.body;

    if(!username || !useremail || !userpassword){
        return res.status(422).json({error:"plzz filled the filed property"});
    }
    try{
        const userExist = await userM.findOne({useremail});
        if(userExist){
            return res.status(422).json({error:"email already exit"});
            }

            // userpassword=bcrypt.hash(userpassword,12);
            const user= new userM({username ,useremail,userpassword});
            const userRegister = await user.save();
            if(userRegister){

                return res.status(201).json({error:"user resgister succssfully"});

            }
            else{

                res.status(500).json({error:"resgister failed"});

            }

    }catch(err){
        console.log(err);
    }
};
   

const  get_profiles =async(req,res)=>{
    console.log(req.body);
   

}
export{
register_action,
login_action,
get_profiles
}