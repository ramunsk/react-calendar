import React from 'react';
import { getWeekdays } from '../../../date-service';
import Weekday from '../Weekday/Weekday';
import './Weekdays.css';

const Weekdays = ({ startWith }) => {
    const wd = getWeekdays().map((i) => {
        return <Weekday key={i} weekday={i} />;
    });

    return <div className="weekdays">{wd}</div>;
};

export default Weekdays;
