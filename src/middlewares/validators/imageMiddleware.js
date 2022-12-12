const {handleHttpError} = require('../../utils/handleError')
const {handleImagePath} = require('../../utils/handleImagePath')
const imageMiddleware = async (req,res, next) => {
   try{
      const filePath = handleImagePath(req.file)
      if(!req.body || !req.file){
         throw new Error
      }
      req.body = Object.assign(req.body, filePath)

      next()
   }catch(err){
      console.log(err)
      handleHttpError(res,'NO_DATA',502)
   }
}

module.exports = imageMiddleware