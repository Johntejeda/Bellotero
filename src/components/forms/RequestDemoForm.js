import React, { Component } from 'react';

export class RequestDemoForm extends Component {
  render() {
    return(
      <form className="form-inline">
        <input type="text" className="input__mail"  placeholder="Your email address"/>
        <button type="submit" className="btn btn-primary button__requestDemo">Request a demo</button>
      </form>
    )
  }
}
