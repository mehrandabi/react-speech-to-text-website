import 'core-js/fn/object/assign';

import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PageTransition from 'react-router-page-transition';

import './styles/index.css';

class App extends React.Component{

  render() {

    return(
          <Router>
            <div>
              <div className="dropdown">
                <button type="button" data-toggle="dropdown">Menu
                <span className="caret"></span></button>
                <ul className="dropdown-menu">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/contactus">Contact Us</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                </ul>
              </div>
              <PageTransition>
                <Route exact path="/" component={HomePage}/>
                <Route path="/contactus" component={ContactUs}/>
                <Route path="/about" component={AboutUs}/>
              </PageTransition>
            </div>
          </Router>
    )
  }
}
//rendering the components
ReactDOM.render(<App/>,document.getElementById('app'));
