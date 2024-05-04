


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



