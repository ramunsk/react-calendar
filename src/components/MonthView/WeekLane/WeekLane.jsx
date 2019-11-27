import React from 'react';
import './WeekLane.css';

const WeekLane = (props) => {
    return (
        <div className="weeklane">
            <div className="weeklane__header">{props.weekNumber || ''}</div>
        </div>
    );
};

export default WeekLane;
