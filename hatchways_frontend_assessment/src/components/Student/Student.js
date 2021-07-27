import React from "react";
import "./Student.css";
import TestScoresButton from "../TestScoresButton/TestScoresButton.js";
import TestScores from "../TestScores/TestScores.js";
import Tag from "../Tag/Tag.js";
import AddTagField from "../AddTagField/AddTagField.js";

const Student = (props) => {
	const student = props.student;
	const grades = student.grades;
	const total = grades.reduce((a, b) => parseInt(a) + parseInt(b));
	const average = total / grades.length;

    const [displayTestScores, setDisplayTestScores] = React.useState(false);

    const handleTestScores = (state) => {
        setDisplayTestScores(state);
    }

    console.log(student);

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
                <div className="tagsWrapper">{student.tags.map((tag, index) => (
                    <Tag tag={tag} key={index} />
                ))}</div>
                <AddTagField addTag={props.addTag} studentID={student.id} />
			</div>
			<TestScoresButton testScores={handleTestScores} />
		</div>
	);
};

export default Student;
