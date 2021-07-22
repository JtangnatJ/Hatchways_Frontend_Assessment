import React from "react";
import "./Student.css";

const Student = (props) => {
	const student = props.student;
    const fullName = student.firstName + ' ' + student.lastName;
    // const 
	const grades = student.grades;
	const total = grades.reduce((a, b) => parseInt(a) + parseInt(b));
	const average = total / grades.length;

	return (
		<div id="StudentInfo">
			<div id="picWrapper">
				<img id="pic" src={student.pic} alt="Profile Pic" />
			</div>
			<div id="StudentText">
				<div id="name">
                    {fullName.toUpperCase()}
					{/* {student.firstName} {student.lastName} */}
				</div>
				<div id="email">Email: {student.email}</div>
				<div id="company"> Company: {student.company}</div>
				<div id="skill">Skill: {student.skill}</div>
				<div id="average">Average: {average}%</div>
			</div>
		</div>
	);
};

export default Student;
