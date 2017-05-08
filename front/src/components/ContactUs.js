require('normalize.css/normalize.css');
require('../styles/contactus.css');

import React from 'react';
import FooterComponent from './Footer';

class ContactUs extends React.Component{
  render() {
    return(
      <div className="transition-item">
        <form className="contactus-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="email" className="form-control" id="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea rows="5" className="form-control" id="message"/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
        <FooterComponent/>
      </div>
    )
  }
}

export default ContactUs;
