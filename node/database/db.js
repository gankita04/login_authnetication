// import mongoose from "mongoose";
// mongoose.connect('mongodb://127.0.0.1:27017/userinfo');


import mongoose from "mongoose";

async function connection(){
    // return await mongoose.connect('mongodb://localhost:27017/mernproject');


    return await mongoose.connect('mongodb+srv://ankita:Ankita0410@ankita.k70ud.mongodb.net/mernproject?retryWrites=true&w=majority')

    

}

connection()
.then(res=>{
    console.log("db connected");
    // console.log(res);
})

.catch(err=>{
    console.log("error");
    // console.log(err);
    throw err;
})