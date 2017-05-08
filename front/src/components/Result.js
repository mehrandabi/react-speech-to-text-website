require('normalize.css/normalize.css');
require('../styles/Result.css');

import React from 'react';

class ResultComponent extends React.Component{
  constructor(props){
    super(props);
    this.state= {answer: ''};
    this.state.answer= false;
  }
  render() {
    return(
      <div>
        {this.state.answer == true &&
        <div className="Result">
          <h3>The Result Will be Shown Here</h3>
        </div>}
      </div>
    )
  }
}

export default ResultComponent;
