import React, {Component} from 'react';
import MainLyout from '../layout/mainLayout';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CamViewComponent from './CamViewComponent';

class HomeComponent extends Component {

  render() {
    return (
      <div className="App">
        <MainLyout>
        </MainLyout>
      </div>
      );
  }
}

export default (HomeComponent);
