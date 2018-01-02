import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

class BarGraph extends Component {
  render() {
    return (
        <Panel className='bar-graph-container'>
          
          <div className='may-bar-container'>
            <div className='may-bar'>
              <div className='month-total'>400</div>
            </div>
            <div className='month-label'> May </div>
          </div>

          <div className='june-bar-container'>
            <div className='june-bar'>
              <div className='month-total'>500</div>
            </div>
            <div className='month-label'> June </div>
          </div>

          <div className='july-bar-container'>
            <div className='july-bar'>
              <div className='month-total'>600</div>
            </div>
            <div className='month-label'> July </div>
          </div>

          <div className='august-bar-container'>
            <div className='august-bar'>
              <div className='month-total'>450</div>
            </div>
            <div className='month-label'> Aug </div>
          </div>

          <div className='september-bar-container'>
            <div className='september-bar'>
              <div className='month-total'>330</div>
            </div>
            <div className='month-label'> Sept </div>
          </div>

          <div className='october-bar-container'>
            <div className='october-bar'>
              <div className='month-total'>200</div>
            </div>
            <div className='month-label'> Oct </div>
          </div>

          <div className='november-bar-container'>
            <div className='november-bar'>
              <div className='month-total'>300</div>
            </div>
            <div className='month-label'> Nov </div>
          </div>
          
        </Panel>
    )
  }
}

export default BarGraph;