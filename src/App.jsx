import React, {Component} from 'react';
import Navbar from './Navbar.jsx';
import Header from './Header.jsx';
import MainBody from './MainBody.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <MainBody />
      </div>
    );
  }
}
export default App;
