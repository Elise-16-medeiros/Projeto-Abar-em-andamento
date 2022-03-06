import React from 'react';
import './Principal.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuLateral from '../MenuLateralDireito/MenuLateral';
import PageHome from '../PageHome/PageHome';
import MenuEsquerdo from '../MenuEsquerdo/MenuEsquerdo';
import Navbar from '../Navbar/Navbar';


function Principal() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col className='direito' xs={{ width: 200, height: 500 }} ><MenuLateral /></Col>
          <Col className='meio' xs={{ width: 100 }}><PageHome /></Col>
          <Col className='esquerdo' xs={{ width: 350, height: 800 }}><MenuEsquerdo /></Col>
        </Row>
      </Container>
    </>
  );
}

export default Principal;