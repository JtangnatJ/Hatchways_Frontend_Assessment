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
        setDisplayTestScores(state);
    }

	return (
		<div className="StudentInfo">
			<div className="picWrapper">
				<img className="pic" src={student.pic} alt="Profile Pic" />
			</div>
			<div className="StudentText">
				<div className="name">{student.fullName}</div>
				<div className="email">Email: {student.email}</div>
				<div className="company"> Company: {student.company}</div>
				<div className="skill">Skill: {student.skill}</div>
				<div className="average">Average: {average}%</div>
                <TestScores showScores={displayTestScores} grades={grades} />
			</div>
			<TestScoresButton testScores={handleTestScores} />
		</div>
	);
};

export default Student;
