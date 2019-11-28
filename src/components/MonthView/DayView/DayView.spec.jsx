import React from 'react';
import ReactDOM from 'react-dom';
import DayView from './DayView';

describe('<DayView />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DayView date={new Date()} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
