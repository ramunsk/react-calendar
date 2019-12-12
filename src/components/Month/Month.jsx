import React from 'react';
import Days from './Days/Days';
import './Month.css';
import Weekdays from './Weekdays/Weekdays';

const MonthView = ({ date }) => {
    return (
        <div className="month">
            <Weekdays />
            <Days />
        </div>
    );
};

export default MonthView;
