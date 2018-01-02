import React from 'react';
import {Button, Col, Glyphicon, Grid, Panel, Row} from 'react-bootstrap';

const SummaryPage1 = (props) => (
      <div>
        <Col smHidden={true} md={2} className='circle'> 
          <p>Surgeries</p> 
        </Col>

        <Panel className='summary-panel'>
          <Grid>
            <Row className='total-row'>
              <Col md={4} className='left-text'>
                <p> Total </p>
                <p> Performed </p>
              </Col>
              <Col md={2} className='right-text'>
                <p> 2780 </p>
              </Col>
            </Row>
            <Row className='average-row'>
              <Col md={4} className='left-text'>
                <p> Average </p>
                <p> (Over <b><em>7</em></b> Months) </p>
              </Col>
              <Col md={2} className='right-text'>
                <p> 401 </p>
              </Col>
            </Row>
          </Grid>
        </Panel>

        <Col md={2} className='right-arrow'> 
          <Button onClick={props.changePage}> 
            <Glyphicon glyph="glyphicon glyphicon-chevron-right"/>
          </Button>
        </Col>
      </div>
    );

export default SummaryPage1;