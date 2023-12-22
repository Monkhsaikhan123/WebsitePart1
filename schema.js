const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema(
    {
        fname:String,
        lname:String, 
        email:{ type: String,unique:true},
        password:String,
        Usertype:String,

    },{
        collection:'users'
    }
);

mongoose.model('users' , UsersSchema)