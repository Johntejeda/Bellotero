import React, { Component } from 'react';

import { IntroSection } from './sections/Intro';
import { Clients } from './sections/Clients';
import { About } from './sections/About';
import { Bookkeeping } from './sections/Bookkeeping';
import { Carousel } from './../../components/Carousel';
import { Calculator } from './sections/Calculator';
import { RequestDemo } from './sections/RequestDemo';

export class Main extends Component {
  render() {
    return(
      <main className="row">
        <IntroSection/>
        <Clients/>
        <About/>
        <Bookkeeping/>
        <Carousel/>
        <Calculator/>
        <RequestDemo/>
      </main>
    )
  }
}
