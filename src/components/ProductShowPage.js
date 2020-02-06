import React, { Component } from "react";

import "./css/ProductShowPage.css";
import { ProductDetails } from "./ProductDetails";
import { ReviewList } from "./ReviewList";
import { TagList } from "./TagList";
import oneProductData from '../oneProductData'

class ProductShowPage extends Component {
  constructor(props) {
    // When using a constructor in a class-based
    // component, you must call the 'Component' class
    // constructor with 'super' passing it the 'props'
    super(props);
    this.state = {
      product: oneProductData
    };
  }

  deleteProduct() {
    this.setState({
      product: null
    });
  }

  deleteReview(id) {
    this.setState({
      product: {
        ...this.state.product,
        reviews: this.state.product.reviews.filter(r => r.id !== id)
      }
    });
  }

  render(){
    if (!this.state.product) {
      return (
        <div className="Page">
          <h3 className="ui red header">Product doesn't exist</h3>
        </div>
      );
    }
    return (
      <div className="Page">
        <ProductDetails 
        // title="Good Product"
        // description=" Product description"
        // price="$100"
        // seller={{ full_name: "Michael Owen" }}
        // created_at={new Date()}
        {...this.state.product}
        />
        <button
          className="ui small right floated red button"
          onClick={() => this.deleteProduct()}
        >
          Delete
        </button>
        <h2>Tags</h2>
        <TagList 
        //tags={oneProductData.tags} 
        tags={this.state.product.tags}
        />
        <br />
        <ReviewList 
        // reviews={oneProductData.reviews}
        reviews={this.state.product.reviews} 
        onReviewDeleteClick={id => this.deleteReview(id)}
        />
      </div>
    );
  }
};

export default ProductShowPage;