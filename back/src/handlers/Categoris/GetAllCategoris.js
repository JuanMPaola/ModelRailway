const { Categori } = require("../../db")

const getAllCategoris = async (req,res)=>{
    try {
        const response = await Categori.findAll()

        res.status(200).json(response)

    } catch (error) {
        
        res.status(400).json({error: error.message})
    }
}

module.exports =  { getAllCategoris };