const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

const tokenSign = (user) => {

const sign =  jwt.sign(
    {
        _id: user._id,
        role:user.role
    },
    JWT_SECRET,
    {
        expiresIn:'1h'
    }
)
return sign
}

const verifyToken = async (tokenJwt) => {
    try{
        return jwt.verify(tokenJwt, JWT_SECRET)    
    }catch(err){
        return null
    }
}

module.exports = {
    tokenSign,
    verifyToken
}