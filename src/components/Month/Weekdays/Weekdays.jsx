import React from 'react';
import Weekday from '../Weekday/Weekday';
import './Weekdays.css';

const Weekdays = ({ startWith }) => {
    const weekdays = [...Array(7).keys()].map((i) => {
        return <Weekday key={i} weekday={i} />;
    });

    return <div className="weekdays">{weekdays}</div>;
};

export default Weekdays;
