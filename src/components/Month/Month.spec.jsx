import React from 'react';
import ReactDOM from 'react-dom';
import MonthView from './MonthView';

describe('<MonthView />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MonthView />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
