const fs = require('fs')

function handleImagePath(file) {
    const filePath = file.path;
    const fileSplit = filePath.split("\\");
  
    const path = {
        path:`${fileSplit[1]}/${fileSplit[2]}`
    }
    return path;
  }
  
function handleDeleteImage(path){
  if(!fs.existsSync(`./src/${path}`)){
    throw new Error
  }
    fs.unlinkSync(`./src/${path}`)
}

  module.exports = {
    handleImagePath,
    handleDeleteImage
  }