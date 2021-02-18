const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const { Schema } = mongoose;

const SchemaRecursos = new Schema({
    titulo: { type: String, required: true },
    claves: Array,
    descripcion: String,
    fuente: { type: String, require: true, unique: true },
    tipo: { type: String,  enum: ["Testimonio", "Informe", "Caso"]},
    cobertura: {
        fec_ini: { type: String, required: true},
        fec_fin: { type: String, required: true},
        ubicacion: { type: String, required: true}
    }
});

module.exports =  mongoose.model('Recurso', SchemaRecursos);