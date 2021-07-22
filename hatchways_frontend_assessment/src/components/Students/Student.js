import React from "react";

const Student = (props) => {
	const student = props.student;
	const grades = student.grades;
	const total = grades.reduce((a, b) => parseInt(a) + parseInt(b));
	const average = total / grades.length;

	return (
		<div id="studentInfo">
			<img id="pic" src={student.pic} alt="Profile Pic" />
			<div id="name">
				{student.firstName} {student.lastName}
			</div>
			<div id="email">Email: {student.email}</div>
			<div id="company"> Company: {student.company}</div>
			<div id="skill">Skill: {student.skill}</div>
			<div id="average">Average: {average}%</div>
		</div>
	);
};

export default Student;
