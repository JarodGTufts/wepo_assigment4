import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPizza } from '../../actions/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        pizzas: ownProps.pizzas,
        addPizza: pizza => dispatch(addPizza(pizza))
    };
};

class ConnectedPizzaDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            detail: {
                image: '',
                name: '',
                description: '',
                price: ''
            }
        };
    }
    componentWillMount() {
        this.context.pizzaServer.getPizza(this.props.detail,
            (item) => {
                this.setState({detail: item});

            },
            (error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className={'PizzaDetail'}>

                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <img src={this.state.detail.image} alt="" />
                        </div>
                        <div className="col-9">
                            <h3>{this.state.detail.name}</h3>
                            <h4>{this.state.detail.description}</h4>
                            <h4>Price: {this.state.detail.price}</h4>
                            <div className={'btn btn-primary'} onClick={ () => { this.onAddToCart(this.props.detail.id, this.context.store); } }>Add to Cart</div>
                        </div>
                    </div>
                </div>

                <div>

                </div>

            </div>
        );
    }

    onAddToCart(id) {
        this.props.addPizza({ id: id, quantity: 1 });
    }
}

ConnectedPizzaDetail.propTypes = {
    // Id of the pizza we want to display
    detail : PropTypes.number.isRequired,
    // Function for adding pizzas provided by the store connection
    addPizza : PropTypes.func.isRequired
};

ConnectedPizzaDetail.contextTypes = {
    // We need access to the pizza server for retrieving the info
    pizzaServer : PropTypes.object.isRequired
};

const PizzaDetail = connect(null, mapDispatchToProps)(ConnectedPizzaDetail);
PizzaDetail.plain = ConnectedPizzaDetail;

export default PizzaDetail;
