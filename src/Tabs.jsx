import React, {Component} from 'react';
import {Nav, NavItem} from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <div className='tabs-container'>
        <Nav bsStyle="tabs" activeKey="1">
          <NavItem eventKey="1" >Surgeries</NavItem>
          <NavItem eventKey="2">Revenue</NavItem>
          <NavItem eventKey="3">Expenses</NavItem>
        </Nav>
      </div>
    );
  }
}

export default NavBar;