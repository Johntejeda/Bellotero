import React, { Component } from 'react';

import Logo1 from '../../../img/logo-1.png';
import Logo2 from '../../../img/logo-2.png';
import Logo3 from '../../../img/logo-3.png';
import Logo4 from '../../../img/logo-4.png';
import Logo5 from '../../../img/logo-5.png';
import Logo6 from '../../../img/logo-6.png';

export function Clients () {
  return (
    <section className="d-flex justify-content-around flex-wrap clients">
      <img src={Logo1} alt="Client1"></img>
      <img src={Logo2} alt="Client2"></img>
      <img src={Logo3} alt="Client3"></img>
      <img src={Logo4} alt="Client4"></img>
      <img src={Logo5} alt="Client5"></img>
      <img src={Logo6} alt="Client6"></img>
    </section>
  )
}
