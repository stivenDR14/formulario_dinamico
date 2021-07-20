import React from 'react';
import { Link } from 'react-router-dom';
import '../../estilos/barra.css';
import { Container, Col, Row, Navbar, Collapse, Button,
  NavbarToggler,
  Nav,
  NavItem, } from 'reactstrap';

function Barra  (props) {

  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div className="NavbarLayout">
      <Container fluid >
        
        <Row>
          <Col xs={{ size: '4', offset: 2 }} md="7" lg="8">              
          <Navbar  light expand="sm" >
            <NavbarToggler onClick={toggle} />
                <Nav  style={{zIndex:"25", marginTop:"20px", marginLeft:"50px"}}  navbar>
                <Collapse isOpen={isOpen} navbar>
                    <NavItem >
                    <Link to="/"><Button outline color="light"> Diseñar formulario </Button></Link>
                    </NavItem>
                    <NavItem >
                    <Link to="/test"><Button outline color="light">  Testear formulario  </Button></Link> 
                    </NavItem>
                    
                </Collapse>
                </Nav>
            </Navbar>
          </Col>
        </Row>         
      </Container>
    </div>
  );
}

export default Barra;
