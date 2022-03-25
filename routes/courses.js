
const { Router } = require('express');

const { courseGet,
        coursePut,
        coursePost,
        courseDelete,
        coursePatch } = require('../controllers/course_controller');

const router = Router();


router.get('/', courseGet );

router.put('/:id', coursePut );

router.post('/', coursePost );

router.delete('/', courseDelete );

router.patch('/', coursePatch );





module.exports = router;