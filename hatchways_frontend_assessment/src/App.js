import React, { useState, useEffect } from 'react';
import './App.css';
import Students from './Students.js';
const axios = require('axios');

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.hatchways.io/assessment/students')
            .then((returnData) => {
                // setData(JSON.stringify(returnData.data.students)); /*data visualization*/
                setData(returnData.data.students)
            })
            .catch((error) => {
                console.log(error);
            })
            .then(() => {
                console.log(data);
            })
    })

    return (
        <div className="App">
            <Students data={data} />
        </div>
    );
}

export default App;
