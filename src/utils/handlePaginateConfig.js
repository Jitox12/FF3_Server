const handlePaginateConfig = async (values) => {
    const populateConfig = values.map((value) => {
        const populate = {
            path:value.toString(),
            select:{
                _id:0,
                deleted:0
            },
            strictPopulate:false,
        }
    return populate
    })
    return populateConfig
}

const handlePostPaginateConfig = async(paginateConfig,secondPaginateConfig) => {
    const config = paginateConfig.map((prePaginate) => {
        prePaginate.populate = secondPaginateConfig 
        return prePaginate           
    })
    return config
}

module.exports = {
    handlePaginateConfig,
    handlePostPaginateConfig
    
}