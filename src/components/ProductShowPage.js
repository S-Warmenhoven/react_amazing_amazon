import React, { Component } from "react";

import "./css/ProductShowPage.css";
import { ProductDetails } from "./ProductDetails";
import { ReviewList } from "./ReviewList";
import { TagList } from "./TagList";
import { Product } from "../api/product";
import { Spinner } from "./Spinner";

class ProductShowPage extends Component {
  constructor(props) {
    // When using a constructor in a class-based
    // component, you must call the 'Component' class
    // constructor with 'super' passing it the 'props'
    super(props);
    this.state = {
      product: {
        tags: []
      },
      isLoading: true
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

  componentDidMount() {
    // All components that are rendered by a <Route> component
    // (like QuestionShowPage) will be given props by that
    // route component. One of these props called "match", which
    // contains information related to the pattern matched path
    // defined in App.js
    // <Route path="/questions/:id/:test/:something" component={QuestionShowPage} />
    // match: {
    //   params: {
    //     id: <whatever-id-is>,
    //     test: <whatever-test-is>,
    //     something: <whatever-something-is>
    //   }
    // }
    Product.one(this.props.match.params.id).then(product => {
      this.setState({ product, isLoading: false });
    });
  }

  render(){
    if (this.state.isLoading) {
      return <Spinner message="Product doesn't exist" />;
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