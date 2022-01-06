//here we will have all routes call back function which are (req, res) => {}
//and each call back function will have a name to export it to the routes as second arguement call back function
//by convention StudentData should be rename with capitalize data
import StudentData from '../models/student.js';

export const getStudents = async (req, res) => {
    try {
        //student here is the student from moudel student.js
        const allStudents = await StudentData.find();
        res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createStudent = async (req, res) => {
    const student = req.body;

    const newStudent = new StudentData(student);

    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteStudent = async (req, res) => {
    const id = req.params.id;

    try {
        await StudentData.findByIdAndRemove(id);
        res.send('Successfully Deleted!')    
    } catch (error) {
        console.log(error);
    }
}