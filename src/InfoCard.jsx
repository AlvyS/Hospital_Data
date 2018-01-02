import React, {Component} from 'react';
import BarGraph from './BarGraph.jsx';
import Summary from './Summary.jsx';

class InfoCard extends Component {
  render() {
    return (
      <div className='info-card-container'>
        <h1> Based on the results between <b><ins>May, 2013</ins></b> and <b><ins>November, 2013</ins></b> </h1>
        <Summary />
        <h2> <ins>Month-to-Month Breakdown</ins> </h2>
        <BarGraph />
      </div>
    )
  }
}

export default InfoCard;