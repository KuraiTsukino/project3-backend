// 1. Importación de modelo.
const Place = require("./../models/Place")

exports.create = async (req, res) => {

    // Del formulario, creamos variables y asignamos valores.
    const {
        country,
        name,
        type,
        schedule,
        price,
        image,
        description,
        map
    } = req.body

    // Crear un lugar en base de datos
    try {
        const newPlace = await Place.create({
            country,
            name,
            type,
            schedule,
            price,
            image,
            description,
            map
        })
        // Devolver una respuesta en un formato Json
        res.json ({
            msg: "Lugar creado con éxito",
            data: newPlace
        })

    } catch (error) {
        
        res.status(500).json({
            msg: "Hubo un error creando el lugar",
            error: error
        })
    }
}

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

exports.edit = async (req, res) => {

    const { id } = req.params

    // Obteniendo datos del formulario
    const {
        country,
        name,
        type,
        schedule,
        price,
        image,
        description,
        map
    }= req.body

    try {
        const updatedPlace = await Place.findByIdAndUpdate(
            id,
            {
                country,
                name,
                type,
                schedule,
                price,
                image,
                description,
                map
            },
            {new:true}
        )
        res.json({
            msg: "Lugar actualizado con éxito",
            data: updatedPlace
        })

    } catch (error) {
        
        res.status(500).json({
            msg: "Hubo un error con la actualización del lugar",
            error: error
        })
    }
}

exports.delete = async (req, res) => {
    
    const { id } = req.params

    try {
        const deletedPlace = await Place.findByIdAndDelete({_id: id})

        res.json({
            msg: "Lugar borrado con éxito",
            data: deletedPlace
        })

    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error borrando el lugar",
            error: error
        })
    }
}