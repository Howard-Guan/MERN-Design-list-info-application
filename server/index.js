import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

//setting the image size where convert to json object cannot be larger than 20mb each
//extended true makes everything goes to json object not only limit at string 
//if extended to false than json object only accept string
app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));

//this cors function should be put before the app.use(/students) so that cors does blocked the backend access to the database
app.use(cors());

app.use('/students', studentRoutes);



const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () => 
    console.log(`Connection is established and running on port : ${PORT}`)
)).catch((err) => console.log(err.message));