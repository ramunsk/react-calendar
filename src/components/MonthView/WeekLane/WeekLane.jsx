import React from 'react';
import DayView from '../DayView/DayView';
import './WeekLane.css';

const WeekLane = ({ weekNumber }) => {
    const dayViews = [...Array(7).keys()].map((i) => <DayView />);

    return (
        <div className="weeklane">
            <div className="weeklane__header">{weekNumber || ''}</div>
            {dayViews}
        </div>
    );
};

export default WeekLane;
