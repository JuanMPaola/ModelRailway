const { Post } = require("../../db")

const postPost = async (req,res)=>{
    const {title, description, categori, image}=req.body

    try {
        const newPost = await Post.create({title, description, image})

        const post = await newPost.setCategori(categori)

        res.status(200).json(newPost)

    } catch (error) {
        
        res.status(400).json({error: error.message})
    }
}

module.exports =  { postPost };