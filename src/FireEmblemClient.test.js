import React from 'react';
import ReactDOM from 'react-dom';
import FireEmblemClient from './FireEmblemClient';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FireEmblemClient />, div);
    ReactDOM.unmountComponentAtNode(div);
});
