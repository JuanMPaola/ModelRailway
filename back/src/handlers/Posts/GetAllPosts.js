const { Post, Categori } = require("../../db")

const getAllPosts = async (req,res)=>{
    try {
        const response = await Post.findAll({include:{model: Categori}})

        res.status(200).json(response)

    } catch (error) {
        
        res.status(400).json({error: error.message})
    }
}

module.exports =  { getAllPosts };