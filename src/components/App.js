//npm packages
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//user defined
import ProductShowPage from "./ProductShowPage";
import { ProductIndexPage } from "./ProductIndexPage";
import { HomePage } from "./HomePage";
import { NavBar } from "./NavBar";
import { Session } from "../api/session";
import { ProductNewPage } from "./ProductNewPage";
import { SignInPage } from "./SignInPage";
import { User } from "../api/user";
import { AuthRoute } from "./AuthRoute";
import { SignUpPage } from "./SignUpPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
    this.getUser = this.getUser.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }

  //whenever user signed in, we call this method
  getUser() {
    User.current().then(data => {
      if (typeof data.id !== "number") {
        this.setState({ currentUser: null });
      } else {
        this.setState({ currentUser: data });
      }
    });
  }

  destroySession() {
    Session.destroy().then(this.setState({ currentUser: null }))
  }

  //when App is loaded, it will look for current user, otherwise user is null
  //until sign in
  componentDidMount() {
    this.getUser();
  }

  // THIS "HACKY SIGN IN" WAS DONE BEFORE USER SIGN IN WITH API ENABLED
  // async componentDidMount() {
  //   //This gives us back a cookie that represents us being logged in
  //   //Now, when we make POST requests to the server to make a Question,
  //   //we will be authorized/authenticated
  //   //This is Hacky method until we learn about authentication in React
  //   const user = await Session.create({
  //     email: "js@winterfell.gov",
  //     password: "supersecret"
  //   });

  //   this.setState({ currentUser: user });
  // }

  render() {
    return (
      <BrowserRouter>
        <header>
          <NavBar 
            currentUser={this.state.currentUser}
            onSignOut={this.destroySession}
          />
        </header>
        <div className="ui container segment">
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/products" component={ProductIndexPage} />
            <AuthRoute
              // The !! turns a statement from "truthy/falsy" to "true/false" respectively
              isAuthenticated={!!this.state.currentUser}
              component={ProductNewPage}
              path="/products/new"
              exact
            />
            <AuthRoute
              isAuthenticated={!!this.state.currentUser}
              component={ProductShowPage}
              path="/products/:id"
              exact
            />
            <Route
              path="/sign_up"
              render={routeProps => (
                <SignUpPage {...routeProps} onSignUp={this.getUser} />
              )}
            />
            <Route 
              path="/sign_in" 
              render={routeProps => (
                <SignInPage {...routeProps} onSignIn={this.getUser} />
              )} 
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;

