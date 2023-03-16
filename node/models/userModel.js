import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const { Schema } = mongoose;

const userSchema = new Schema({
    username:{ 
        type: String,
         required: [true , 'user Name can not be Empty'],
          minLength: [2, 'user name must have minimum 2 charachter']
         },

    useremail:{ 
        type: String, 
        required: [true , 'User Email can not be Empty'], 
        unique: [true , 'Emailid Already Exist']
     },

    userpassword: { 
        type: String, 
        required: [true , 'user password can not be empty'],
         minLength: [4 , 'User password Must Have minimum 4 char'], 
        },
        tokens:[
            {
                token:{
                type:String,
                required:true
            }
        }

        ]

    
});

userSchema.pre('save' , async function(next){
    console.log('from inside');
    
  
        this.userpassword =  await bcrypt.hash(this.userpassword,12);
        console.log(this);
         next();
    
    
});

//genrate token

userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id: this._id , name:this.username , email:this.useremail}, process.env.SECRET_KEY);
        this.tokens= this.tokens.concat({ token:token });
        await this.save();
        return token;

    } catch(err){
        console.log(err);

    }
}
const userModel = mongoose.model('users' ,userSchema);
export default userModel;