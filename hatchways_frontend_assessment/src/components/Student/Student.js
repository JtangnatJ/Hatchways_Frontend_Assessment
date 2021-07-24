import React from "react";
import "./Student.css";
import TestScoresButton from "../TestScoresButton/TestScoresButton.js";
import TestScores from "../TestScores/TestScores.js";

const Student = (props) => {
	const student = props.student;
	const grades = student.grades;
	const total = grades.reduce((a, b) => parseInt(a) + parseInt(b));
	const average = total / grades.length;

    const [displayTestScores, setDisplayTestScores] = React.useState(false);

    const handleTestScores = (state) => {
        console.log(state);
        setDisplayTestScores(state);
    }

	return (
		<div id="StudentInfo">
			<div id="picWrapper">
				<img id="pic" src={student.pic} alt="Profile Pic" />
			</div>
			<div id="StudentText">
				<div id="name">{student.fullName}</div>
				<div id="email">Email: {student.email}</div>
				<div id="company"> Company: {student.company}</div>
				<div id="skill">Skill: {student.skill}</div>
				<div id="average">Average: {average}%</div>
                <TestScores showScores={displayTestScores} />
			</div>
			<TestScoresButton testScores={handleTestScores} />
		</div>
	);
};

export default Student;
