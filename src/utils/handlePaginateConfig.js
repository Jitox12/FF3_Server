const handlePaginateConfig = async (values) => {

    const populateConfig = values.map((value) => {
        const populate = {
            path:value.toString(),
            select:{
                name:1,
                _id:0
            },
            strictPopulate:false, 
    }
    return populate
    })
    return populateConfig
}

module.exports = handlePaginateConfig