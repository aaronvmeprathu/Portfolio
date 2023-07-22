import React from 'react'
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from './ccbc.jpg'
import './Profile.css'

function Profile() {
  return (
    <Row className='profile p-4 rounded-4 m-2'>
        <Col className='pe-4 ' lg={3}  md={4} sm={12}>
        <Image src={profile}   className="rounded-4 profile-image " fluid />
        </Col>
        <Col  md={8} sm={12} className='mt-sm-4 mt-md-0'>
        <Row>
          <Row>
          <Col md={6} sm={12}  >
          <h3 className='fw-semibold'>Billy Pearson</h3>
          <p className='gray'>Front-end developer</p>
          </Col>
          <Col md={6} sm={12}  className='mt-sm-4 mt-md-0 gray text-md-end'>
            <p><span class="material-symbols-outlined">mail</span>billy@example.com</p>
            <p><span class="material-symbols-outlined">call</span>(+603) 546 624 342</p>
          </Col>
          </Row>  
          <p className='pt-5 gray '>Self-motivated developer, who is willing to learn and create outstanding UI applications.<br/> 

             Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </p>
          
        </Row>
          
        </Col>
    </Row>
  )
}

export default Profile