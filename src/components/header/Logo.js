import React, { Component } from 'react';

export function Logo (props) {
  return (
    <div className="col-sm-2">
      <img src={props.logo} alt="Bellotero.io"></img>
    </div>
  )
}
