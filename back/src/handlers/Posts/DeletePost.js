const { Post } = require("../../db")

const deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await Post.destroy({where:{id: id}})

        if (response) return res.status(200).json("Se elimino el post con éxito")
        else return res.status(404).send("Not found")

    } catch (error) {
        
        res.status(400).json({error: error.message})
    }


};

module.exports = { deletePost };