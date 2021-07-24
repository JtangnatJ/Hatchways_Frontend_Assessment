import React from "react";
import './TestScoresButton.css'

const TestScoresButton = (props) => {
	const [expanded, setExpanded] = React.useState(false);

	const handleClick = (event) => {
		event.preventDefault();
		setExpanded(!expanded);
        props.testScores(!expanded);
	};

	return (
		<div id="ButtonContainer">
			<button id="TestScoresButton" type="button" onClick={handleClick}>
				{expanded ? '-' : '+'}
			</button>
		</div>
	);
};

export default TestScoresButton;
