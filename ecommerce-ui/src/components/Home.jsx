import React from 'react';
import { Container, Row } from 'react-bootstrap';


import NavBar from './NavBar';
import '../App.css';

function Home() {
  return (
    <div>
        <NavBar />
        <Row className='home-page'>
          <Container className='w-75'>
            <h1>Welcome to our Marvel Comics Fan Paradise!</h1>
            <h3>Where heroes and villains clash, and the excitement never ends!</h3>
          </Container>
        </Row>
    </div>
  )
}

export default Home