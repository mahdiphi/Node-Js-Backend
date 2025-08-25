const getSessions = (req, res) =>{
    try {
        res.send("mmd im comming in here")
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getSessions,
    
}