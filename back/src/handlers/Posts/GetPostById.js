const { Post, Categori } = require("../../db")

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await Post.findOne({
            where: { id },
            include:{model: Categori}})

        res.status(200).json(response)

    } catch (error) {
        
        res.status(400).json({error: error.message})
    }


};

module.exports = { getPostById };