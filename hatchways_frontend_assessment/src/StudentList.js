import React from 'react';
import Student from './Student.js';
import './StudentList.css';

const StudentList = (props) => (
    <div id="studentList">
        {props.data.map((student, index) => (
            <Student student={student} key={index} />
        ))}
    </div>
);

export default StudentList;
