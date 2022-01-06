import express from 'express';
import { getStudents, createStudent, deleteStudent } from '../controllers/student.js';


const router = express.Router();

//the first arguement is going to be the path the second arguement is going to be the call back function (req, res, next) => {}
router.get('/', getStudents);
router.post('/', createStudent);
router.delete('/:id', deleteStudent);


export default router;