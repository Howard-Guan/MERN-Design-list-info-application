import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';

export default function CreateStudent() {

  const [student, setStudent] = useState({

    regNo: 0,
    studentName: '',
    grade: '',
    section: ''
  });

  const createStudent = () => {
    axios.post('http://localhost:5000/students', student);
    console.log(student);
  }

  return (
    <div>
           
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        noValidate
        autoComplete="off"
        >
            <h1>Create Student</h1> 
            <TextField id="outlined-basic" label="Registeration" variant="outlined" value={student.regNo} onChange={(event)=> {setStudent({...student, regNo: event.target.value})}}/>
            <TextField id="outlined-basic" label="Name" variant="outlined" value={student.studentName} onChange={(event)=> {setStudent({...student, studentName: event.target.value})}}/>
            <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange={(event)=> {setStudent({...student, grade: event.target.value})}}/>
            <TextField id="outlined-basic" label="Section" variant="outlined" value={student.section} onChange={(event)=> {setStudent({...student, section: event.target.value})}}/>
            <div>
                <Button variant="contained" onClick={createStudent}>Create</Button>
            </div>
        </Box>
        
    </div>
  );
}
