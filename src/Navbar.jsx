import React, {Component} from 'react';
import {Nav, Navbar, NavDropdown, MenuItem} from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar fixedTop={true} inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">General Hospital</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown title='My Account'>
              <MenuItem >Action</MenuItem>
              <MenuItem >Another action</MenuItem>
              <MenuItem >Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem >Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar;