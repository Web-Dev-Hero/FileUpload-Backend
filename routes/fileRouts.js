let express=require('express')

let router=express.Router()

let{localFileUpload,imageUploader,videoUpload,filereduce}=require('../contoller/fileuplaod')


router.post('/uploadImage',localFileUpload)
router.post('/imageUpload',imageUploader)
router.post('/videoUpload',videoUpload)
router.post('/fileReduce',filereduce)


// router.post('/Upload',Upload,(req,res)=>{
//   res.send('file uploaded')
// })

module.exports=router