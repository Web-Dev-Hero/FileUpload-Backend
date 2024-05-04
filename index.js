let express=require('express')
let app=express()
let Db=require('./config/database')
Db.Dbconnect()
require('dotenv').config()
let Upload=require('./routes/fileRouts')
let cors=require('cors')
app.use(cors())


let cloud=require('./config/cloudernery')
cloud.CloudIneryConnect()

app.use('/api/v1/upload',Upload)

let fileUpload=require('express-fileupload')
app.use(fileUpload())
  
app.use(express.json())

let port=process.env.PORT || 3000

app.listen(port,()=>{
  console.log(`your server is runing is ${port}`)


 
})
 

