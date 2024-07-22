const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name : String,
   location:String,
   childeren:Array,
});

const User = mongoose.model('parent',StudentSchema );
module.exports = User;
// module.exports = mongoose.model(
//     'parents', StudentSchema, 'parents');

//     const student = [
//      "Akhila", "falcon"
//     ]

//    const parent ={ 
//    name : "yashwanth",
//    location:" hyderabad",
//    childeren:["rakesh","lavanya"],
// enemies:{
//     name:"Akhila",
//     location:"Hayathnagar"

// }


//    }