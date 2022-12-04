const Job = require('../../entities/job')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const handlePaginateConfig = require('../../utils/handlePaginateConfig')

async function findJobServices(req,res){
 try{
    req = matchedData(req)
    const {limit,page} = req
    const values = ['character', 'crystal', 'ability','equipmentType']

    const paginateConfig = await handlePaginateConfig(values)
    const jobList = await Job.paginate({},{populate:paginateConfig, limit:limit,page:page})

    res.json(jobList)
 }catch(err){
   console.log(err)
    handleHttpError(res,'ERROR_FIND_ANY_JOB',404)
 }
}


module.exports = {
    findJobServices
}
