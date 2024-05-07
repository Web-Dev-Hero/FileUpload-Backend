
let cloudinary=require('cloudinary').v2

let File = require('../model/filemodel');

exports.localFileUpload =async (req, res) => {
  try {
   
    let file = req.files.file;
    console.log(file);


    // Check if req.files or req.files.file is undefined
    if (!req.files || !req.files.file) {
        return res.status(400).json({
          success: false,
          message: "No file uploaded"
        });
      }
  






    let path = __dirname + "/files/" + Date.now()+`. ${file.name.split('.')[1]}`;
    console.log(path);

    file.mv(path, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          success: false,
          message: "Error in uploading local file"
        });
      }
      // If no error occurred while moving the file
      res.json({
        success: true,
        message: "Local file uploaded successfully"
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};


function isFileTypeSupported(type,supportType){
  return supportType.includes(type)
}


async function uploadFileToclodinery(file,folder,quality){
  let option={folder}
if(quality){
  option.quality=quality
}




   option.resource_type="auto"
   return await cloudinary.uploader.upload(file.tempFilePath,option)
}



// image upload handler


exports.imageUploader=async(req,res)=>{

try{
let {name,tags,email}=req.body;
console.log(name,tags,email)

let file=req.files.imageFile;
console.log('file',file)
//validation

let supportType=['jpg','jpeg','png']

let  filetype=file.name.split('.')[1].toLowerCase()
console.log('filetype',filetype)
if(!isFileTypeSupported(filetype,supportType)){
 return res.status(400).json({
  success:false,
  message:"file format not supported"
 }) 
}
//file formated supported
console.log('awo ji mere sath')
let respons=await uploadFileToclodinery(file,'codehelp',30)
console.log(respons)


let fileData=await File.create({
  name,tags,email,imageUrl:respons.secure_url
})

 
res.status(200).json({
  success:true,
  imageUrl:respons.secure_url,
  message:"your image is successfully   uploaded in cloudinery"
})



}

catch(err){
console.log(err)
res.status(400).json({
  success:false,
  message:"error while uploading image in cloudinery",
  message:err.message
})
}

}


//video upload


exports.videoUpload=async(req,res)=>{
  try{
    //fetch data
    let{name,tags,email}=req.body;
    console.log(name,tags,email)
   
    let file=req.files.videoFile


    let supportType=['mp4','mov']

    let fileType=file.name.split('.')[1].toLowerCase()

   if(!isFileTypeSupported(fileType,supportType)){
    return res.status(400).json({
      success:false,
      message:"file format not supported"
    })
   }
   let respons=await uploadFileToclodinery(file,'codehelp')
   console.log('upload to codehelp')

   let fileVideo=await File.create({
    name,tags,imageUrl:respons.secure_url
   })


  

   res.status(200).json({
    success:true,
    imageUrl:respons.secure_url,
    message:"video is successfully uploaded"
   })


  }
  catch(err){
 res.status(400).json({
  success:false,
  message:'error while uploading video',
  message:err.message

 })


  }




}

/// file reduce file 


exports.filereduce=async(req,res)=>{
  try{
    let {name,tags,email}=req.body;
    console.log(name,tags,email)
    
    let file=req.files.imageFile;
    console.log('file',file)
    //validation
    
    let supportType=['jpg','jpeg','png']
    
    let  filetype=file.name.split('.')[1].toLowerCase()
    console.log('filetype',filetype)
    if(!isFileTypeSupported(filetype,supportType)){
     return res.status(400).json({
      success:false,
      message:"file format not supported"
     }) 
    }
    //file formated supported
    console.log('awo ji mere sath')
    let respons=await uploadFileToclodinery(file,'codehelp',30)
    console.log(respons)
    
    
    let fileData=await File.create({
      name,tags,email,imageUrl:respons.secure_url
    })
    
     
    res.status(200).json({
      success:true,
      imageUrl:respons.secure_url,
      message:"your image is successfully   uploaded in cloudinery"
    })
    
    
    
    }
    
    catch(err){
    console.log(err)
    res.status(400).json({
      success:false,
      message:"error while uploading image in cloudinery",
      message:err.message
    })
    }
    
    }
    



