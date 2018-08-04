import React, { Component } from 'react';

export const Anchor = (props) => {
  return(
    <a href={props.link}>
      Learn more
      <ion-icon name="arrow-forward"></ion-icon>
    </a>
  )
}
