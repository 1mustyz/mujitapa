const {singleUpload} = require('./filesMiddleware');
const cloudinaryUplouder = require('./uploadCloudinary')
const multer = require('multer');
const cloudinary = require('cloudinary');
const Student = require('./models/student')
// cloudinary configuration for saving files
cloudinary.config({
  cloud_name: 'drwxitp8n',
  api_key: '325286914776221',
  api_secret: 'KxD1nlzIbZGVZWLIrmZNVN41rrs'
})

exports.createStudent = async (req, res) => {
  // console.log(req.body)
  await Student.collection.insertOne(req.body)
  res.json({sucess: true, msg: 'student inserted'})
}

exports.getAllStudent = async (req, res) => {
  const result = await Student.find({})
  res.json({sucess: true, result})
}

// set profile pic
exports.setPic = async (req, res) => {

    const prev_pic = req.query.prev_pic
        
    singleUpload(req, res, async function(err) {
      if (err instanceof multer.MulterError) {
        res.send({code: 400, message: err.message})
        return
      }
      else if (err) {
        res.send({code: 400, message: err})
        return 
      }
      else if (!req.file) {
        res.send({code: 400, message: 'Please select an image to upload'})
        return
      }
      if(req.file){
  
            
            let isImageDeleted 
            if (prev_pic != null && prev_pic != '' && prev_pic != undefined){
              isImageDeleted = await cloudinaryUplouder.delete(prev_pic)
            }else isImageDeleted = true 
          

            let mediaImage 
            if(isImageDeleted) mediaImage = await cloudinaryUplouder.upload(req.file.path)

            res.send({code:200, message:"image uploaded", mediaImage:mediaImage})
            return
                        
      }
         
      });
  
      
          
    
  }
  

