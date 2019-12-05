import { eachDayOfInterval, endOfMonth, endOfWeek, startOfMonth, startOfWeek } from 'date-fns';
import React from 'react';
import Day from './Day/Day';
import Days from './Days/Days';
import './Month.css';
import Weekdays from './Weekdays/Weekdays';

const MonthView = ({ date }) => {
    const now = date || new Date();
    const firstDate = startOfWeek(startOfMonth(now), { weekStartsOn: 1 });
    const lastDate = endOfWeek(endOfMonth(now), { weekStartsOn: 1 });
    const viewDates = eachDayOfInterval({ start: firstDate, end: lastDate });

    const dayViews = viewDates.map((d, i) => <Day key={d.valueOf()} date={d} />);

    return (
        <div className="month">
            <Weekdays />
            <Days />
        </div>
    );
};

export default MonthView;
