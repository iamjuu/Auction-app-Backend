const multer = require('multer')
const path = require('path');


const propertyImage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'propertyImage/'); // Directory to save uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
    }
  });
  const propertyImageupload = multer({ storage: propertyImage });

  module.exports={
    propertyImageupload
  }