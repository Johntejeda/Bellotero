import React, { Component } from 'react';

export function Nav () {
  return (
    <nav className="col-sm-10 d-none d-sm-block">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="#"> Features </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> Solutions </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> Stories </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> Partners </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> About </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> Blog </a>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-primary btn__demo">Request a Demo</button>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-outline-secondary btn__login">LOGIN</button>
        </li>
      </ul>

    </nav>
  )
}
