import React from 'react';
import ReactDOM from 'react-dom';
import Day from './Day';

describe('<DayView />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Day date={new Date()} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
