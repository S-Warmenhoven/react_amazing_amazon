import React, { Component } from "react";

import data from "../productData";

export class ProductIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // This copies the products array into
      // a new array that is stored in the state
      // of this component, as the state's products field
      // products: data.map(product => product)
      products: [...data]
    };

  }

  deleteProduct(id) {
    // To update state ALWAYS use 'setState(...)' method

    // You can use setState by passing an object to its first argument.
    // When the time comes, the object will be merged with the current state

    // This will change whatever properties are within the current state
    // this.setState({
    //   products: this.state.products.filter(q => q.id !== id)
    // });

    // You can also use setState by giving a callback as a first argument
    // that receives the current state and props as arguments.
    // It must return an object that will be merged with the state
    this.setState((state, props) => {
      return {
        products: state.products.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <main>
        <h2 className="ui horizontal divider header">Products</h2>
        <ul className="ui list">
          {this.state.products.map(product => (
            <li className="item" key={product.id}>
              <a className="ui link" href="">{product.title}</a>
              <button
                className="ui small right floated red button"
                onClick={() => this.deleteProduct(product.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
};