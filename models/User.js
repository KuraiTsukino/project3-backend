// 1. Importaciones
const mongoose = require("mongoose")

// 2. Schema 
const userSchema = mongoose.Schema ({
    firstName: {
        type: String,
        required: [ 'User name is required']
    },
    lastName: {
        type: String,
        default: ""
    },
    country: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Use a valid email.']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    imgUrl: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/1452/1452378.png"},
    wishlist: Array,
},{ timestamps: true },
)

// 3. Modelos.
const User = mongoose.model("User", userSchema)

// 4. Exportación.
module.exports = User