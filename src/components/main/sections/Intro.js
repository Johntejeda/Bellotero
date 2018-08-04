import React, { Component } from 'react';
import Mock from '../../../img/hero-mockup@3x.png';
import { RequestDemoForm } from '../../forms/RequestDemoForm';

export class IntroSection extends Component {
  render() {
    return(
      <section className="container-fluid d-flex align-items-center section__intro">
        <div className="row">
          <div className="col-sm-12 col-md-5 section__intro__left">
            <span className="section__intro__title">
              <strong>Digitize your invoices</strong><br></br> and create your own shopping cart.
            </span>
            <RequestDemoForm/>
          </div>
          <div className="col-sm-12 col-md-7">
            <img className="img--hero" src={Mock} alt="Mock Intro"></img>
          </div>
        </div>
      </section>
    )
  }
}
