import React, { Component } from 'react';

import { Copy } from './Copy';
import { AnchorBellotero } from './AnchorBellotero';

import appStore from '../../img/app-store.png';
import googlePlay from '../../img/google-play.png';

export const Footer = (props) => {
  return(
    <footer className="row">
      <div className=" container d-flex justify-content-around">
        <div className="belloteroLogo d-none d-sm-block">
          <img src={props.logoF} alt="Bellotero"></img>
        </div>
        <div className="belloteroReferences d-none d-sm-block">
          <h4>Bellotero.io</h4>
          <AnchorBellotero link={"#"}>
            Features
          </AnchorBellotero>
          <AnchorBellotero link={"#"}>
            Solutions
          </AnchorBellotero>
          <AnchorBellotero link={"#"}>
            History
          </AnchorBellotero>
          <AnchorBellotero link={"#"}>
            About
          </AnchorBellotero>
          <AnchorBellotero link={"#"}>
            BelloteroLogo
          </AnchorBellotero>
        </div>
        <div className="belloteroSocial">
          <h4>Social</h4>
          <AnchorBellotero link={"https://www.facebook.com/Holacode1/"}>
            Facebook
          </AnchorBellotero>
          <AnchorBellotero link={"https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"}>
            Twitter
          </AnchorBellotero>
          <AnchorBellotero link={"https://www.linkedin.com/mynetwork/"}>
            Linkedin
          </AnchorBellotero>
        </div>
        <div className="belloteroSupport ">
          <h4>Support</h4>
          <ul>
            <li>(847)000-010</li>
            <li>Chat now</li>
            <li><a><img src={appStore}></img></a></li>
            <li><a><img src={googlePlay}></img></a></li>
          </ul>
        </div>
      </div>
      <Copy/>
    </footer>
  )
}
