import React from 'react';
import './Day.css';

const Day = ({ date }) => {
    return (
        <div className="day">
            <div className="day__header">{date.getDate()}</div>
        </div>
    );
};

export default Day;
