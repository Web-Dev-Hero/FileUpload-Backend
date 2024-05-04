let mongoose=require('mongoose')


let FileMOdel=new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  imageUrl:{
    type:String

  },

  tags:{
    type:String
  },
  email:{
    type:String
  }
})


let data=mongoose.model('file',FileMOdel)

module.exports=data