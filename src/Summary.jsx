import React, {Component} from 'react';
import SummaryPage1 from './SummaryPage1.jsx'
import SummaryPage2 from './SummaryPage2.jsx'

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = { summaryPage: 1 };
  }

  changePage() {
    if(this.state.summaryPage == 1) {
      this.setState({ summaryPage: 2 })
    } else if(this.state.summaryPage == 2) {
      this.setState({ summaryPage: 1})
    }
  }
  
  renderCorrectSummaryPage() {
    if(this.state.summaryPage == 1) {
      return <SummaryPage1 changePage={this.changePage.bind(this)}/>
    } else if(this.state.summaryPage == 2) {
      return <SummaryPage2 changePage={this.changePage.bind(this)}/>
    }
  }

  render() {
    return (
      <div className='summary-container'>
        {this.renderCorrectSummaryPage()}
      </div>
    )
  }
}

export default Summary;