import React from 'react';
import './DayView.css';

const DayView = ({ date }) => {
    return (
        <div className="day">
            <div className="day__header">{date.getDate()}</div>
        </div>
    );
};

export default DayView;
