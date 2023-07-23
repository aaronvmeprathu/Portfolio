import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from './components/Profile';
import Container from 'react-bootstrap/Container';
import Skill from './components/Skill';
import Articles from './components/Articles';



function App() {
 

  return (
    <div>
      <Container className='App p-3'>
        <Row>
          <Col md={12}>
          <Profile/>
          </Col>
          <Col md={5}>
          <Skill/>
          </Col>
          <Col md={7}>
          <Articles/>
          </Col>
        </Row>
     
  </Container>

    </div>
    
  
    
   
  
  
  )
}

export default App
