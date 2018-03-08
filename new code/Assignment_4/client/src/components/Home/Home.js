import React from 'react';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={'Home'}>
                <h1 className='display-1'>PizzariaUno</h1>
                <h3 className='display-4'>The best pizza in town.</h3>
            </div>
        );
    }
}

export default Home;
