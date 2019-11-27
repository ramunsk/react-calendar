import React from 'react';
import ReactDOM from 'react-dom';
import WeekLane from './WeekLane';

describe('<WeekLane />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<WeekLane />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
