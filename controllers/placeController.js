// 1. Importación de modelo.
const Place = require("./../models/Place")

exports.readAll = async (req, res) => {

    try {
        const places = await Place.find({})

        res.json({
            msg: "Places successfully obtained",
            data: places
        })

    } catch (error) {
        
        res.status(500).json({
            msg: "There was an error getting the data",
            error: error
        })
    }
}

exports.readOne = async (req, res) => {
    
    const { id } = req.params

    try {
        const place = await Place.findById(id)

        res.json({
            msg:"Lugar obtenido con éxito",
            data: place
        })

    } catch (error) {
        
        res.status(500).json({
            msg: "Hubo un error obteniendo los datos",
            error: error
        })
    }
}