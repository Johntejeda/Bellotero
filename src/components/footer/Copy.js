import React, { Component } from 'react';

export const Copy = () => {
  return(
    <div className="container-fluid d-flex justify-content-around align-items-center copyAndTerms">
      <small className="copy">© 1909 Bellotero.io</small>
      <div className="d-flex justify-content-end policyAndTerms">
        <small>Privacy Policy</small>
        <small>Terms of Service</small>
      </div>
    </div>
  )
}
