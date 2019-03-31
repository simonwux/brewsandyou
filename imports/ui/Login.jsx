import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Meteor } from "meteor/meteor";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      email: "",
      password: "",
      redirectToHome: false
    };
  }

  onChange(event) {
    // console.log("name: ", event.target.name, " value: ", event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    let email = this.state.email.trim();
    let password = this.state.password.trim();

    Meteor.loginWithPassword({ email }, password, err => {
      console.log("Login callback", err);
    });
    this.setState({ redirectToHome: true });
    // console.log("Email: ", email, " Pass: ", password);
  }

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Login</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            onChange={this.onChange.bind(this)}
            value={this.state.emailValue}
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            onChange={this.onChange.bind(this)}
            value={this.state.passwordValue}
            type="password"
            name="password"
            placeholder="Password"
          />
          <button>Login</button>
        </form>

        <Link to="/signup">Need an account?</Link>
      </div>
    );
  }
}
