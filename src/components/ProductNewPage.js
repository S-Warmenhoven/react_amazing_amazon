import React, { Component } from "react";

import { Product } from "../api/product";

export class ProductNewPage extends Component {
  createProduct = event => {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);

    const newProduct = {
      title: fd.get("title"),
      description: fd.get("description"),
      price: fd.get("price")
    };

    Product.create(newProduct).then(data => {
      if (!data.errors) {
        // redirect user to that question to QuestionShowPage

        //This 'history' prop is provided by the <Route />
        //component from react-router.  It has a bunch of methids
        // to manipulate browser.  You can use 'push' to direct a user
        // to any page in our app
        this.props.history.push(`/products/${data.id}`);
      }
    });

    currentTarget.reset();
  };
  render() {
    return (
      <form
        className="NewProductForm ui form"
        onSubmit={event => this.createProduct(event)}
      >
        <div className="field">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="field">
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" rows="3" />
        </div>
        <div className="field">
          <label htmlFor="price">Price</label>
          <textarea name="price" id="price" rows="3" />
        </div>
        <button className="ui orange button" type="submit">
          Create Product
        </button>
      </form>
    );
  }
}

export default ProductNewPage;