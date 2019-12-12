import {
    weekdays
} from './date-service';

describe('date-service', () => {

    describe('weekdays() should', () => {

        it('return weekdays starting on Monday by default', () => {
            // act
            const result = weekdays();

            //assert
            expect(result).toEqual(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
        });
    });
});