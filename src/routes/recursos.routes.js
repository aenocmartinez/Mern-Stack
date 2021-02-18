const express = require('express');
const router = express.Router();
const Recurso = require('../models/recurso');

// Lista los recursos
router.get('/', async (req, res) => {
    const recursos = await Recurso.find();
    res.json(recursos);
});

// obtener un recurso
router.get('/:id', async (req, res) => {
    const recurso = await Recurso.findById(req.params.id)
                    .catch(err => res.json({ status: "El recurso no existe."}));
    res.json(recurso);
});

// Crea un recurso
router.post('/', async (req, res) => {
    const {titulo, claves, descripcion, fuente, tipo, cobertura} = req.body;
    const recurso = new Recurso({titulo, claves, descripcion, fuente, tipo, cobertura});
    await recurso.save()
            .catch(err => res.json({ status: "Ha ocurrido un error no se ha podido crear el recurso" }));
    res.json({ status: "Recurso creado" });
});

// Actualiza un recurso
router.put('/:id', async (req, res) => {
    const {titulo, claves, descripcion, fuente, tipo, cobertura} = req.body;
    const nuevoRecurso = {titulo, claves, descripcion, fuente, tipo, cobertura};
    await Recurso.findByIdAndUpdate(req.params.id, nuevoRecurso)
        .catch(err => res.json({ status: "Ha ocurrido un error no se ha podido actualizar el recurso" }));   
    res.json({ status: "Recurso actualizado" });    
});

// Elimina un recurso
router.delete('/:id', async (req, res) => {
    await Recurso.findByIdAndRemove(req.params.id)
        .catch(err => res.json({ status: "Ha ocurrido un error al intentar eliminar el recurso." }));
        res.json({ status:"Recurso eliminado"});
});

module.exports = router;