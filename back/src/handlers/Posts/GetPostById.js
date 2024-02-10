const { Post, Categori } = require("../../db")

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await Post.findByPk(id,{include:{model: Categori, attributes:["title"]}})

        if (post) return res.status(200).json(post)
        else return res.status(404).send("Not found")

    } catch (error) {
        
        res.status(400).json({error: error.message})
    }


};

module.exports = { getPostById };