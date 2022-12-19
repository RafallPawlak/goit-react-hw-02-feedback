import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from './FeedbackWidget.module.css';


class FeedbackWidget extends Component {

    
  static defaultProps = {};

  static propTypes = {};

  render() {
      return (
          <div>
              <button type="button">Increment by {step}</button>
              <button type="button">Decrement by {step}</button>
              <button type="button">Decrement by {step}</button>
              <span>0</span>
              <span>0</span>
              <span>0</span>
          </div>
      );
}
}
//////
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
