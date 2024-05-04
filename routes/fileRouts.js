let express=require('express')

let router=express.Router()

let{localFileUpload}=require('../contoller/fileuplaod')


router.post('/uploadImage',localFileUpload)

// router.post('/Upload',Upload,(req,res)=>{
//   res.send('file uploaded')
// })

module.exports=router