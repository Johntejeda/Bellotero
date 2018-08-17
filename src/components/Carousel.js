import React, { Component } from 'react';

import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { React_Bootstrap_Carousel } from "react-bootstrap-carousel";

import Quote from '../img/quotation-marks.svg';

const styles = { height: 450, width: "100%" };

export class Carousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: false
    };
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };


  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };

  render() {

    return (
      <section className="col-md-12 section__carousel">
        <React_Bootstrap_Carousel version={4} className="carousel-fade">
          <div className="d-flex justify-content-center align-items-center flex-wrap" style={{ ...styles}}>
            <div className="col-xs-12 col-sm-6 carousel-left">
              <h3>Our customers love us</h3>
              <p>
                <img  className="quote"src={Quote}></img>
                 It's funny what memory does, isn't
                 it? My favorite holiday tradition might not have happened
                  more than once or twice. But because it is such a good
                  memory, so encapsulating of everything I love about the
                  holidays, in my mind it happened every year. Without fail.
                </p>

            </div>
            <div className="col-xs-12 col-sm-6 carousel-right">
              <h4>Marcela Torres </h4>
              <br></br>
              <h4 className="text-muted">Hola-code CEO</h4>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-wrap" style={{ ...styles }}>
            <div className="col-xs-12 col-sm-6 carousel-left">
              <h3>Our customers love us</h3>
              <p>
                <img  className="quote"src={Quote}></img>
                 One of the the best experiences in my life. I have gone from
                 just understading what cooding is to and surplus of knowledge.
                 I am not only greatfull for the learning experience that Holacode
                 has provided me but the life long friendships that have blossomed
                 my time here. 
                </p>
            </div>
            <div className="col-xs-12 col-sm-6 carousel-right">
              <h4>John Tejeda</h4>
              <br></br>
              <h4 className="text-muted">Hola-code Grad</h4>
            </div>
          </div>
        </React_Bootstrap_Carousel>
      </section>
    );
  }
}
