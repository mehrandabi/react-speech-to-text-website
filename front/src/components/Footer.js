require('normalize.css/normalize.css');
require('../styles/Footer.css');

import React from 'react';

class FooterComponent extends React.Component{
  render() {
    return(
        <div className="panel panel-default">
          <div className="panel-body">
          <a href="http://www.faraadid.com"><img src="../images/logo.png"/></a>
          <a href="http://www.instagram.com/faraadid/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
          <a href="https://www.facebook.com/faraadid"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
          <a><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
          <a><i className="fa fa-tumblr-square" aria-hidden="true"></i></a>
          <a><i className="fa fa-pinterest-square" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/company/faraadid?trk=top_nav_home"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
          </div>
        </div>
    )
  }
}
export default FooterComponent;
