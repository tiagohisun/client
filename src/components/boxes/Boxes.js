import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import services from "../../static/images/boxes/services.jpg" 
import classifieds from "../../static/images/boxes/classifieds.jpg"

import blog from "../../static/images/boxes/blog.jpg"

const Boxes = (props) => {
  return (
    <div className="wrapper container-fluid" style={{marginTop: '5px', display:'grid', gridGap: '0', justifyItems:'center', width:'1200px'}}>
    <Row>
     <Link to="/">
      <Col >
      <div style={{ width:'350px', minheight:'300px'}} >
      
      </div>
      <CardImg top style={{width:'350px', height:'230px'}} src={blog} alt="Card image cap" />
        <Card style={{ display:'absolute', zIndex:'2', width:'350px', height:'190px', transform:'translateY(-50px)',
        opacity:'0.7', textAlign:'center', }} body>
          
          <CardTitle style={{color:"black", cursor:'pointer', transform:'translateY(-10px)' }}><strong>Articles - SOON!</strong>
          <hr className="hr" /></CardTitle>
          <CardText style={{color:"black"}}>Take a look at our blog with interesting articles on dental imaging.</CardText>
        </Card>
      </Col>
      </Link>
      <Link to="/shop">
      <Col >
      <div style={{ width:'350px', minheight:'300px'}} >
      
      </div>
      <CardImg top style={{width:'350px', height:'230px'}} src={classifieds} alt="Card image cap" />
        <Card style={{ display:'absolute', zIndex:'2', width:'350px', height:'190px', transform:'translateY(-50px)',
        opacity:'0.7', textAlign:'center'}} body>
          
          <CardTitle style={{color:"black", cursor:'pointer', transform:'translateY(-10px)' }}><strong>Classifieds</strong><hr/></CardTitle>
          <CardText style={{color:"black", paddingBottom: '40px'}}>At used dental units section you will find the best available offer.</CardText>
        </Card>
      </Col>
      </Link>

      <Link to="/services">
      <Col >
      <div style={{ width:'350px', minheight:'300px'}} >
      
      </div>
      <CardImg top style={{width:'350px', height:'230px'}} src={services} alt="Card image cap"/>     
        <Card style={{ display:'absolute', zIndex:'2', width:'350px', height:'190px', transform:'translateY(-50px)',
        opacity:'0.7', textAlign:'center'}} body>     
          
          <CardTitle style={{color:"black", cursor:'pointer', transform:'translateY(-10px)'}}><strong>Services</strong><hr/></CardTitle>
          <CardText style={{color:"black", paddingBottom: '40px'}}>We´re ready to support you ASAP. Try out our sevices.</CardText>
        </Card>
      </Col>
      </Link>
  </Row>
  
  </div>
  );
};

export default Boxes;