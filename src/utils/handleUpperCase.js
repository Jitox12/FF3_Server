function toUpperCaseFirstKey(key){
    words  = key.split(" ")

    UpperCase = words
                .filter((word) => word.trim().length > 0)
                .map((word) =>word[0].charAt(0).toUpperCase() + word.substring(1))
                .join(" ")
    
    return UpperCase
}

module.exports = {
    toUpperCaseFirstKey
}