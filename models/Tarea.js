// 69 - importamos mongoose
const mongoose = require("mongooses");

// 70 - Creamos el Schema de tarea
const TareaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: Boolean,
        default: false
    },
    creado: {
        type: Date,
        default: Date.now()
    },
    proyecto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proyecto'
    }

})

// 71 - Exportamos
module.exports = mongoose.model('Tarea', TareaSchema)