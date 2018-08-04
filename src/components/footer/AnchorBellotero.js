import React, { Component } from 'react';


export const AnchorBellotero = (props) => {
  return(
    <ul>
      <li>
        <a href={props.link}>{ props.children }</a>
      </li>
    </ul>
  )
}
