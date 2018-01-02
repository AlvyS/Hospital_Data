import React from 'react';
import {Button, Col, Glyphicon, Grid, Panel, Row} from 'react-bootstrap';

const SummaryPage2 = (props) => (
      <div>
        <Col smHidden={true} md={2} className='circle'> 
          <p>Details</p> 
        </Col>
        <Panel className='summary-panel'>
          <Grid>
            <Row className='daycases-row'>
              <Col md={4} className='left-text'>
                <p> Day Cases </p>
              </Col>
              <Col md={2} className='right-text'>
                <p> 1,112 (40%) </p>
              </Col>
            </Row>
            <Row className='others-row'>
              <Col md={4} className='left-text'>
                <p> Others </p>
              </Col>
              <Col md={2} className='right-text'>
                <p> 1,668 (60%) </p>
              </Col>
            </Row>
          </Grid>
        </Panel>
        <Col md={2} className='right-arrow'> 
          <Button onClick={props.changePage}> 
            <Glyphicon glyph="glyphicon glyphicon-chevron-left"/>
          </Button>
        </Col>
      </div>
    );

export default SummaryPage2;