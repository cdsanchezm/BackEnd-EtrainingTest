const { response, request } = require('express');
const Course = require('../models/course');


const courseGet = async(req = request, res = response) => {

    const courses = await Course.find();

    res.json({
        courses
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

    // Fist we delete the course
   const course = await Course.findByIdAndDelete(id);

    res.json({
       course
    });
}




module.exports = {
    courseGet,
    coursePost,
    coursePut,
    coursePatch,
    courseDelete,
}