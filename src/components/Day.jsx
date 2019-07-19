import React from 'react';

const Day = ({ day }) => {
    return (
        <div>
            <h2>{day.dataPrevisao}</h2>
            <h3>Max temp: {day.tMin}</h3>
            <h3>Min temp: {day.tMax}</h3>
        </div>
    );
};

export default Day;
