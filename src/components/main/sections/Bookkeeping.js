import React, { Component } from 'react';

import bg1 from '../../../img/photo-1@3x 2.jpg';
import bg2 from '../../../img/photo-1@3x.jpg';
import bg3 from '../../../img/photo-2@3x.jpg';

export const Bookkeeping = ()=> {
  return(
    <section className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-md-4 p-0 d-flex flex-column align-items-center
          justify-content-center bookkeeping  bookkeeping__1">
          <h1 className="display-3">50<small>%</small></h1>
          <p>Saved in  bookkeeping costs</p>
        </div>
        <div className="col-xs-12 col-md-4 p-0 d-flex flex-column align-items-center
          bookkeeping justify-content-center bookkeeping__2">
          <h1 className="display-3">100<small>h</small></h1>
          <p>and more saved in bookkeeping time</p>
        </div>
        <div className="col-xs-12 col-md-4 p-0 d-flex flex-column align-items-center
          bookkeeping justify-content-center bookkeeping__3">
          <h1 className="display-3">25<small>%</small></h1>
          <p>Decrease in  food costs</p>
        </div>
      </div>
    </section>
  )
}
