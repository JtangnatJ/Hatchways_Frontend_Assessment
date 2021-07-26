import React, { useEffect } from "react";
import"./TestScores.css";

const TestScores = (props) => {
	const [displayed, setDisplayed] = React.useState(null);

    useEffect(() => {
        setDisplayed(props.showScores);
    }, [props.showScores]);

	return <div className="testScores">{
        displayed ? 
        props.grades.map((grade, index) => (
            <div className="testGrade">
                <div>Test {index + 1}:</div>
                <div>{grade}%</div>
            </div>
        ))
        : 
        <></>}
        </div>;
};

export default TestScores;
