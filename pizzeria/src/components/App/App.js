import React from 'react';
import { Switch, Route } from 'react-router-dom';


/*
class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button type="button" className="btn btn-primary">Learn More</button>
            </div>
        );
    }
}
*/

// A simple routing app for rendering the correct type
const App = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <div>Hello</div>} />
            <Route path="/about" render={() => <div>About</div>} />
        </Switch>
    )
}

export default App;
