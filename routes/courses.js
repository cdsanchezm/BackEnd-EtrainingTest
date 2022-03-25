
const { Router } = require('express');

const { courseGet,
        coursePut,
        coursePost,
        courseDelete,
        coursePatch } = require('../controllers/course_controller');

const router = Router();
const { check } = require('express-validator');
const { validate } = require('../models/course');
const { validarCampos } = require('../middlewares/validarCampos');


router.get('/', courseGet );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
],coursePut );

router.post('/',[
    check('course_name', 'El nombre es obligatorio').not().isEmpty(),
    check('fecha_inicio', 'La fecha de inicio es obligatoria').not().isEmpty(),
    check('fecha_fin', 'La fecha de fin es obligatoria').not().isEmpty(),
    validarCampos
], coursePost );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
],courseDelete );

router.patch('/', coursePatch );




module.exports = router;