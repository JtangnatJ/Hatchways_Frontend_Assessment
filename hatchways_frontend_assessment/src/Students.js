import React from 'react';
import Student from './Student.js';

const Students = (props) => (
    <div id="studentList">
        {props.data.map((student, index) => (
            <Student student={student} key={index} />
        ))}
    </div>
);

export default Students;
