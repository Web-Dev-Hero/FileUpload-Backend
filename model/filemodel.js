let mongoose=require('mongoose')
let nodemailer=require('nodemailer')

let fileSchema=new mongoose.Schema({
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
// post middleware

fileSchema.post('save',async function(doc){

try{
  console.log("doc->",doc)
  let transporter=nodemailer.createTransport({
    host:process.env.MAIl_HOST,
    auth:{
      user:process.env.MAIL_USER,
      pass:process.env.MAIL_PASS,
    }
  })
// email send
let info=await transporter.sendMail({
  from:'codehelp-by babar',

  to:doc.email,
  subject:'new file upload on cloudinery',
  html:`<h2>heloji</h2> <p>file uploade click here <a href="${doc.imageUrl}">${doc.imageUrl} </a> </p>`
})
console.log("info",info)

}
catch(err){
console.log(err)


}







})





let data=mongoose.model('file',fileSchema)

module.exports=data