import React, { Component } from 'react';

import { Logo } from './Logo';
import { Nav } from './Nav';

export  const Header = (props) => {
  return (
    <header className="row header">
      <Logo logo={props.logo}/>
      <Nav/>
    </header>
  )
}
