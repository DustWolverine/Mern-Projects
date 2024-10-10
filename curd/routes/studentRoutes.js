import express from "express";
import{
    createStudent,
    deleteStudent,
    getStudentById,
    updateStudent,
    getStudents
} from '../controller/studentController.js';

const router=express.Router();

// ? Defining routes

router.get('/',getStudents) //* Get all Students
router.post('/createStudent', createStudent);
router.post('/:id',getStudentById) //* Get student by id
router.put('/:id',updateStudent) //* Update a Student by id
router.delete('/:id',deleteStudent) //! Delete a Student


export default router