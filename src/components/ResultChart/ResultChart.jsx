
import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  { "id": 1, "name": "Student 1", "physics": 78, "chemistry": 72, "math": 85 },
  { "id": 2, "name": "Student 2", "physics": 65, "chemistry": 70, "math": 60 },
  { "id": 3, "name": "Student 3", "physics": 88, "chemistry": 82, "math": 90 },
  { "id": 4, "name": "Student 4", "physics": 55, "chemistry": 60, "math": 58 },
  { "id": 5, "name": "Student 5", "physics": 92, "chemistry": 89, "math": 95 },
  { "id": 6, "name": "Student 6", "physics": 74, "chemistry": 68, "math": 72 },
  { "id": 7, "name": "Student 7", "physics": 81, "chemistry": 77, "math": 84 },
  { "id": 8, "name": "Student 8", "physics": 69, "chemistry": 73, "math": 71 },
  { "id": 9, "name": "Student 9", "physics": 58, "chemistry": 62, "math": 65 },
  { "id": 10, "name": "Student 10", "physics": 85, "chemistry": 80, "math": 88 }
]

const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey='math'></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
                <Line dataKey='physics' stroke='green'></Line>

            </LineChart>
        </div>
    );
};

export default ResultChart;