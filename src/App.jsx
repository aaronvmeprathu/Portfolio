import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';
import Container from 'react-bootstrap/Container';
import Skill from './components/Skill';
import Articles from './components/Articles';



function App() {
 

  return (
    <div>
      <Container className='App p-3'>
     <Profile/>
     <Skill/>
     <Articles/>
  </Container>

    </div>
    
  
    
   
  
  
  )
}

export default App
