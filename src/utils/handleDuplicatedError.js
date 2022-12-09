const handleDuplicatedError = async (parameter, value, Instance) =>{
    
    const valueCount = await Instance.exists().where(parameter).equals(value)

    if(valueCount){
        return true
    }else{
        return false
    }
}

const handleEditDuplicatedError = async(value,Instance, id) => {

    const values = await Instance.findById(id)
    const {name} = values

    if(value === name){
        return true
    }else{
        return false
    }
}
module.exports = {
    handleDuplicatedError,
    handleEditDuplicatedError
}