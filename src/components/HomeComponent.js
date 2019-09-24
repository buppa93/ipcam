import React, {Component} from 'react';
import MainLyout from '../layout/mainLayout';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CamViewComponent from './CamViewComponent';

class HomeComponent extends Component {

  render() {
    return (
        <Router>
          <div className="App">
            <MainLyout>
              <Route 
                exact path='/cam/:id' 
                render={props => <CamViewComponent {...this.props} />}
              />
            </MainLyout>
          </div>
        </Router>
      );
  }
}

export default (HomeComponent);
