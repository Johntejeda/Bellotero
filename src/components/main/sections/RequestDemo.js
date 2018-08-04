import React, { Component } from 'react';
import { RequestDemoForm } from '../../forms/RequestDemoForm';

export class RequestDemo extends Component {
  render() {
    return(
      <section className="col-lg-12 d-flex align-items-center requestDemo">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6 d-flex align-items-center">
              <h1 className="">Ready to get started with Bellotero.io?</h1>
            </div>
            <div className="col-xs-12 col-md-6">
              <p>
                No more manual data entry.
                <br></br>
                Hands off. Thumbs up.
              </p>
              <RequestDemoForm/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
