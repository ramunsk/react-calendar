import { eachDayOfInterval, endOfMonth, endOfWeek, startOfMonth, startOfWeek } from 'date-fns';
import React from 'react';
import Day from '../Day/Day';
import './Days.css';

const Days = ({ date }) => {
    const now = date || new Date();
    const monthStart = startOfMonth(now);
    const start = startOfWeek(monthStart, { weekStartsOn: 1 });
    const monthEnd = endOfMonth(now);
    const end = endOfWeek(monthEnd, { weekStartsOn: 1 });
    const allDays = eachDayOfInterval({ start, end });

    const days = allDays.map((d) => <Day key={d} date={d} />);

    return <div className="days">{days}</div>;
};

export default Days;
