const { Categori } = require("../../db")

const postCategori = async (req,res)=>{
    const {title}=req.body

    try {
        const newCategori = await Categori.create({
            title
        })

        res.status(200).json(newCategori)

    } catch (error) {
        
        res.status(400).json({error: error.message})
    }
}

module.exports =  { postCategori };