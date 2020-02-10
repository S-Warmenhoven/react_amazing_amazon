// import React, { Component } from "react";

// import { Session } from "../api/session";

// export class SignInPage extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       errors: []
//     };

//     this.createSession = this.createSession.bind(this);
//   }

//   createSession(event) {
//     event.preventDefault();
//     const { currentTarget: form } = event;

//     const fd = new FormData(form);

//     Session.create({
//       email: fd.get("email"),
//       password: fd.get("password")
//     }).then(data => {
//       if (data.status === 404) {
//         this.setState({
//           errors: [{ message: "Wrong Email or Password" }]
//         });
//       } else {
//         this.props.history.push("/");
//         if(typeof this.props.onSignIn === "function"){
//             this.props.onSignIn();
//         }
//       }
//     });
//   }

//   render() {
//     const { errors } = this.state;
//     return (
//       <div className="ui clearing segment Page">
//         <h1 className="ui center aligned header">Sign In</h1>
//         <form className="ui large form" onSubmit={this.createSession}>
//           {errors.length > 0 ? (
//             <div className="ui negative message">
//               <div className="header">Failed to Sign In</div>
//               <p>{errors.map(error => error.message).join(", ")}</p>
//             </div>
//           ) : (
//             ""
//           )}
//           <div className="field">
//             <label htmlFor="email">Email</label>
//             <input type="email" name="email" id="email" required />
//           </div>
//           <div className="field">
//             <label htmlFor="password">Password</label>
//             <input type="password" name="password" id="password" required />
//           </div>

//           <input
//             className="ui right floated orange button"
//             type="submit"
//             value="Sign In"
//           />
//         </form>
//       </div>
//     );
//   }
// }

import React, { useState } from "react";
import { Session } from "../api/session";
const SignInPage = props => {
  const [errors, setErrors] = useState([]);
  const createSession = event => {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    Session.create(fromFormData(formData)).then(data => {
      if (data.status === "error") {
        setErrors([data.message]);
        // this.setState({
        //   errors: [data.message]
        // });
        return;
      }
      if (typeof props.onSignIn === "function") {
        props.onSignIn();
      }
      props.history.push("/");
    });
  };
  return (
    <main className="SignInPage">
      <h1>Sign In</h1>
      <form onSubmit={createSession}>
        {errors.length > 0 ? (
          <p className="FormErrors">{errors.join(", ")}</p>
        ) : null}
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="password" id="password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </main>
  );
};
const fromFormData = formData => {
  const newObj = {};
  for (let [name, value] of formData) {
    newObj[name] = value;
  }
  return newObj;
};
export{ SignInPage};
