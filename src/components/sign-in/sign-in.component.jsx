import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../components/firebase/firebase.utils";


export default class SingIn extends Component {
  constructor(props) {
    
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            lable="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            lable="password"
            required
          />

          <div className='buttons'>
          <CustomButton Button type="submit" >Sign in</CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleSingIn type="submit" >Sign in with google</CustomButton>

          </div>
          
        </form>
      </div>
    );
  }
}
