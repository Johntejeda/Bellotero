import React, { Component } from 'react';

import { Anchor } from '../../../components/Anchor';

import intro from '../../../img/intro-img-1@3x.jpg';
import intro2 from '../../../img/intro-img-2@3x.jpg';




export function About () {
  return(
    <section className="container about">
      <article className="row">
        <div className="col-xs-12 col-sm-6">

            <div className="col-md-11">
              <p className="about__weAre">
                Bellotero.io is the digital solution that  gives you fast,
                accurate, automated accounts payable and smart,
                 business-transforming insights.
              </p>
            </div>
            <div className="col-md-12 d-flex align-content-end flex-wrap pb-8">
              <h2>
                Get the full picture.
                <br></br>
                In half the time.
              </h2>
              <p>
                Threads keep all your conversations clearly separated by topic
                so replies won’t get buried in an endless stream of group chat.
                <br></br>
                <Anchor link={'www.bellotero.io'}/>
              </p>
            </div>

        </div>
        <div className="col-xs-12 col-sm-6">
          <img src={intro} alt="Bellotero.io"></img>
        </div>
      </article>
      <article className="row d-flex align-items-center">
        <div className="col-xs-12 col-md-8">
          <img src={intro2} alt="Timesaving"></img>
        </div>
        <div className="col-xs-12 col-md-4">
          <h2>Timesaving,  moneymaking.</h2>
          <p>
            Bellotero.io automatically turns your threaded conversations into a
            searchable catalog of topics.
          </p>
          <Anchor link={'www.bellotero.io/money-making'}/>
        </div>
      </article>
    </section>
  )
}
