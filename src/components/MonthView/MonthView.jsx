import { getWeek, getWeeksInMonth, startOfMonth } from 'date-fns';
import React from 'react';
import './MonthView.css';
import WeekLane from './WeekLane/WeekLane';

const MonthView = () => {
    const now = new Date();
    const numberOfWeeks = getWeeksInMonth(now);
    const firstMonthDay = startOfMonth(now);
    const firstMonthWeek = getWeek(firstMonthDay);

    const weekLanes = Array.from({ length: numberOfWeeks }, (x, i) => i + firstMonthWeek).map((i) => (
        <WeekLane key={i} weekNumber={i} />
    ));

    return <div className="month-view">{weekLanes}</div>;
};

export default MonthView;
