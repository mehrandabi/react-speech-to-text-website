require('normalize.css/normalize.css');
require('../styles/Home.css');

import React from 'react';
import FormComponent from './Form';
import HeaderComponent from './Header';
import FooterComponent from './Footer';
import ResultComponent from './Result';

class HomePage extends React.Component{

  render() {
    return(
        <div>
            <HeaderComponent/>
            <FormComponent/>
            <ResultComponent/>
            <FooterComponent/>    
        </div>

    )
  }
}

export default HomePage;
