import React from 'react';

const Student = (props) => (
    <div id="studentInfo">
        <img id="pic" src={props.student.pic} alt="Profile Pic"/>
        <div id="firstName">{props.student.firstName}</div>
        <div id="lastName">{props.student.LastName}</div>
        <div id="city">{props.student.city}</div>
        <div id="company">{props.student.company}</div>
        <div id="email">{props.student.email}</div>
        <div id="skill">{props.student.skill}</div>
        <div id="grades">{props.student.grades}</div>
    </div>
);

export default Student;
