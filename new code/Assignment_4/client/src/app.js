import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/site';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';
import PizzaServer from './server';
import store from './store/store';
import { Provider } from 'react-redux';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.pizzaServer = new PizzaServer();
    }

    render() {
        return (
            <Provider store={store}>
                <div id={'App'}>
                    <Main pizzaServer={this.pizzaServer} />
                </div>
            </Provider>
        );
    }
}





ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
