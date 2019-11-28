import { eachDayOfInterval, endOfMonth, endOfWeek, startOfMonth, startOfWeek } from 'date-fns';
import React from 'react';
import DayView from './DayView/DayView';
import './MonthView.css';

const MonthView = ({ date }) => {
    const now = date || new Date();
    const viewStart = startOfWeek(startOfMonth(now), { weekStartsOn: 1 });
    const viewEnd = endOfWeek(endOfMonth(now), { weekStartsOn: 1 });
    const viewDates = eachDayOfInterval({ start: viewStart, end: viewEnd });

    const dayViews = viewDates.map((d, i) => <DayView key={d.valueOf()} date={d} />);

    return <div className="month">{dayViews}</div>;
};

export default MonthView;
