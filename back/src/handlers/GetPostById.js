//const axios = require('axios');
// MODELS -> const { Videogame, Genre } = require('../db')
//const { DB_URL } = process.env;

const getPostById = async (req, res) => {
  
   return res.send("Funciona");
  
    /*  try {
        const { id } = req.params;


        const { data } = await axios(`${DB_URL}`);
        
        if (id.includes("-")) {
            const juego = await Videogame.findOne({
                where: { id },
                include: [
                    {
                        model: Genre,
                        attributes: ["name"],
                        through: { attributes: []}
                    }
                ]
            })

            if (juego) return res.status(200).json(juego)
            else return res.status(404).send("Not found")
        }

        if (data.id) {
            return res.status(200).json(data);
        } else {
            return res.status(404).send("Not found");
        }
        

        return res.status(200).send("Funciona");

    } catch (error) {
        res.status(500).json({ message: error.message });
    }*/
};

module.exports = { getPostById };