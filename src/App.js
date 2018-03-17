import React, { Component } from 'react';
import './App.css';
import Nav from "../src/components/Nav";
import projects from "./projects.json";
import ProjCard from "../src/components/ProjCard";
import {Grid, Col, Row, Carousel} from 'react-bootstrap';

class App extends Component {
state ={
  projects
}


  render() {



    return (
      <div className="wrapper" >
  
        <Nav> </Nav>
        <Grid fluid id="content">
  <Row className="show-grid">
    <Col xs={12} md={12} lg={4}>
    <Carousel
    slide={false}
    indicators={false}
    >
    
    {this.state.projects.map(project =>(
     
    
      <Carousel.Item key={project.id}>
         
      <ProjCard
      key={project.id}
      id={project.id}
      name={project.name}
      image={project.image}
      url={project.url}
      Build={project.Build}
      github={project.github}



      />
      
      </Carousel.Item>
     
    ))}
   
    </Carousel>
    </Col>
   
  </Row>


</Grid>

      </div>
     

    );
  }
}

export default App;
