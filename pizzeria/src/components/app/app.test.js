import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// I didn't write this - it came with the react app prebuilt template
// that I opted to use at the very beginning
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
