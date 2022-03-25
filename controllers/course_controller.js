const { response, request } = require('express');
const course = require('../models/course');
const Course = require('../models/course');


const courseGet = async(req = request, res = response) => {
    const { id } = req.params;
    const courses = await Course.find();

    res.json({
        courses
    });
}

const courseGetById = async (req, res = response) => {
    const { id } = req.params;
    const course = await Course.findById(id);
    res.json({
        course
    });
}


const coursePost = async(req, res = response) => {

   
    const body = req.body;
    const course = new Course( body );

     await course.save();

    res.json({
        course
    });
}

const coursePut = async (req, res = response) => {

    const { id } = req.params;
    const{ _id, ...resto} = req.body;

    //TODO: validar que el id exista
    
    const course = await Course.findByIdAndUpdate(id,resto);
        
    res.json({ course});
}

const coursePatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const courseDelete = async (req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
     const course = await Course.findByIdAndDelete( id );


    res.json(course);
}




module.exports = {
    courseGet,
    coursePost,
    coursePut,
    coursePatch,
    courseDelete,
    courseGetById,
}