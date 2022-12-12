const multer = require('multer')
const {handleHttpError} = require('../../utils/handleError')

const uploadFile = (req,res,next) => {
    try{
    const storage = multer.diskStorage({
      destination: './src/public',
      filename: function (_req, file, cb) {
        var uniqueSuffix = file.originalname.slice(
          file.originalname.lastIndexOf('.')
        )
        cb(null,+ Date.now() + '' + uniqueSuffix)
      },
    })

    const upload = multer({ storage: storage })
    return upload
    
    }catch(err){
            handleHttpError(res,'FILE_ERROR', 400)
    }
  }

  const uploadMiddleware = uploadFile()

  module.exports = uploadMiddleware
