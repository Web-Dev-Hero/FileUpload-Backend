let express=require('express')
let app=express()
let Db=require('./config/database')

let cloud=require('./config/cloudernery')
require('dotenv').config()
let Upload=require('./routes/fileRouts')


let fileUpload=require('express-fileupload')
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));



app.use('/api/v1/upload',Upload)



  
app.use(express.json())

let port=process.env.PORT || 3000

app.listen(port,()=>{
  console.log(`your server is runing is ${port}`)


 
})
 
Db.Dbconnect()
cloud.CloudIneryConnect()