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
