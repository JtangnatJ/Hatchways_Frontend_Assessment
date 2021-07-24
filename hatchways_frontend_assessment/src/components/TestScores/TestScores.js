import React, { useEffect } from "react";

const TestScores = (props) => {
	const [displayed, setDisplayed] = React.useState(null);

    useEffect(() => {
        setDisplayed(props.showScores);
    }, [props.showScores]);

    console.log('Test Scores', displayed);

	return <div id="TestScores">{displayed ? <p>Hello</p> : <></>}</div>;
};

export default TestScores;
