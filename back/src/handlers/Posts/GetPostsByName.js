const { Post, Categori } = require("../../db")

const getPostsByCategori = async (req,res)=>{
    try {
        const { title } = req.params;

        const response = await Post.findAll({
            where: { 
                title: { [Op.iLike]: `%${title}`}
             },
            include:{model: Categori}})

        res.status(200).json(response)

    } catch (error) {
        
        res.status(400).json({error: error.message})
    }
}

module.exports =  { getPostsByCategori };