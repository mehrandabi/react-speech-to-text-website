require('normalize.css/normalize.css');
require('../styles/Header.css');

import React from 'react';

class HeaderComponent extends React.Component{
  render() {
    return(<div className="header">
            <h1 className="w3-display-middle">Online Speech-to-Text</h1>
           </div>)
  }
}
// <h4 className="w3-display-middle">Scroll Down to Explore the Website</h4>
export default HeaderComponent;
