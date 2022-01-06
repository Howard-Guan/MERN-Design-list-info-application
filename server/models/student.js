//this file is to initilize the mongooseDB schema which is the storing data format in mongooDB
import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    regNo: Number,
    studentName: String,
    grade: String,
    section: {
        type: String,
        default: 'A'
    }
}); 

//we have created a schema above now we need to create a model which creates the schema

const student = mongoose.model('student', studentSchema);

//using this export model to can preform our CRUD actions to the database
export default student;