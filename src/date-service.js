import {
    eachDayOfInterval,
    endOfWeek,
    format,
    startOfWeek
} from 'date-fns';

export const getWeekdays = (weekStartsOn = 1) => {
    const now = new Date();
    const weekStart = startOfWeek(now, {
        weekStartsOn
    });
    const weekEnd = endOfWeek(now, {
        weekStartsOn
    });

    const week = eachDayOfInterval({
        start: weekStart,
        end: weekEnd
    }).map((d) => format(d, 'EEE', {
        weekStartsOn
    }));

    return week;
};