import React from "react";
import { connect } from "react-redux";
import PizzaItem from '../components/menu/pizza-item/pizza-item.js'

const mapStateToProps = state => {
  return { articles: state.PizzaItem };
};

const ConnectedList = ({ PizzaItem }) => (
  /*
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);
*/
const List = connect(mapStateToProps)(ConnectedList);

export default PizzaListComp
