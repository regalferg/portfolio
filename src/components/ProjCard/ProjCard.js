import React from "react";
import "./ProjCard.css";
import { Col, Row, Button } from 'react-bootstrap';

const ProjCard = props => (
<div className="wrapper">
<div className="card" >
  <img className="card-img-top center-block" src={props.image} alt="Card img cap" />
  <div className="card-body">
  <h5 className="card-title"><strong>Project:</strong> {props.project}</h5>
    <p className="card-text"><strong>Build:</strong> {props.Build}</p>
    
  </div>
 
</div>
<Row className="show-grid">
    <Col xs={6} md={6} lg={6} className="linkItem">
  <Button className="linkBtn" href={props.url} bsSize="large">Go To App</Button> 
    </Col>
    <Col xs={6} md={6} lg={6} className="linkItem">
    <Button className="linkBtn" href={props.github} bsSize="large">GitHub</Button>
    </Col>
    </Row>
</div>
);

export default ProjCard;