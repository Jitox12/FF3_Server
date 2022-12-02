const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const pathStorage = `./src/public`
        cb(null, pathStorage)
    },
    filename:function(req,file,cb){
        //mi cv.pdf mi-foto.png mi-video.mp4
        const ext = file.originalname.split('.').pop()
        const filename= `file-${Date.now()}.${ext}` //TODO unix 202201203.ext
        cb(null, filename)
    }
})

const uploadMiddleware = multer({storage})

module.exports = uploadMiddleware