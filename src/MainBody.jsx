import React, {Component} from 'react';
import Tabs from './Tabs.jsx';
import InfoCard from './InfoCard.jsx';

class MainBody extends Component {
  render() {
    return (
      <div className='mainbody-container'>
        <Tabs />
        <InfoCard />
      </div>
    );
  }
}

export default MainBody;