require('normalize.css/normalize.css');
require('../styles/Form.css');


import React from 'react';

class FormComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state= {selected: '',string : '' , progress : ''};
    this.state.selected = 'File';
    this.state.string = 'Choose Your Voice File:'
    this.state.progress = 100 ;
  }



  file() {
    this.setState({selected : 'File'});
    this.setState({string : 'Choose Your Voice File:'});
  }

  url() {
    this.setState({selected : 'URL'});
    this.setState({string : 'Enter Your Voice URL:'});
  }

  record() {
    this.setState({selected : 'Record'});
    this.setState({string : 'Record Your Voice:'});
  }

  isActive(value) {
    return ((value===this.state.selected) ?'active':'default');
  }

  // progressHandler(){
  //   return {
  //     width: {this.state.progress}+'%',
  //   }
  // }
  render() {
    // let d = 0;
    // this.state.progress = setInterval( function() {
    //   d++;
    //   return d*5;
    // },1000);
    // alert(this.state.progress);
    return(
            <form className="upload-form" method="POST">
              <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                <ul className="nav navbar-nav">
                  <li className={this.isActive('File')} onClick={this.file.bind(this)}><a>Upload File</a></li>
                  <li className={this.isActive('URL')} onClick={this.url.bind(this)}><a>Upload URL</a></li>
                  <li className={this.isActive('Record')} onClick={this.record.bind(this)}><a>Record</a></li>
                </ul>
                </div>
              </nav>
              <img src="../images/record.png" />
                <div className="MyContainer">
                  <p>{this.state.string}</p>
                  {this.state.selected == 'File' && <input type="file"/>}
                  {this.state.selected == 'URL' && <input type="url"/>}
                  {this.state.selected == 'Record' && <input type="file" accept="audio/*;capture=microphone"/>}
                  <div className="progress">
                    <div className="progress-bar progress-bar-success progress-bar-striped active" role="progressbar"
                      style={{width: this.state.progress +'%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                      {this.state.progress}% Complete
                    </div>
                  </div>
                  <input type="submit" value="Submit" disabled/>

                </div>
            </form>

    )
  }
}
export default FormComponent;
