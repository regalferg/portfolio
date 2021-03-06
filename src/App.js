import React, { Component } from 'react';
import './App.css';
import Nav from "../src/components/Nav";
import projects from "./projects.json";
import ProjCard from "../src/components/ProjCard";
import {Grid, Col, Row, } from 'react-bootstrap';
import Slider from "react-slick";


class App extends Component {
state ={
  projects
}


  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      mobileFirst: true,
    };


    return (
      <div className="wrapper" >
  
        <Nav> </Nav>
        <Grid fluid id="content">
  <Row className="show-grid">
    <Col xs={12} md={12} lg={12}>
    <Slider {...settings}>
 
    
    {this.state.projects.map(project =>(
     
    
      <div key={project.id}>
      <ProjCard
      key={project.id}
      id={project.id}
      project={project.project}
      image={project.image}
      url={project.url}
      Build={project.Build}
      github={project.github}

      />
  
     </div>
    ))}
   </Slider>

    </Col>
   
  </Row>


</Grid>

      </div>
     

    );
  }
}

export default App;
