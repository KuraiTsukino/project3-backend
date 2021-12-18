// 1. Importación de modelo.
const Country = require("./../models/Country")

exports.readAll = async (req, res) => {

    try {
        const countries = await Country.find({})

        res.json({
            msg: "Countries successfully obtained",
            data: countries
        })
    } catch (error) {

        res.status(500).json({
            msg: "There was an error getting the data",
            error: error
        })
        
    }
}

exports.readOne = async (req, res) => {
    
    const{ id } = req.params

    try {
        const country = await Country.findById(id)

        res.json({
            msg: "País obtenido con éxito",
            data: country
        })

    } catch (error) {
        
        res.status(500).json({
            msg: "Hubo un error obteniendo los datos",
            error: error
        })
    }
}