import React from 'react'
import Image from 'react-bootstrap/Image';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import gaming from './gaming.jpg';
import './hobbies.css'
function Hobbies() {
    const [hobbies,setHobbies]=useState([
        {
            key:"1",
          title:"Gaming",
          url:"./gaming.jpg",
          discription: "Quisque feugiat malesuada molestie.",
        },
        {
            key:"2",
          title:"Cooking",
          url:{gaming},
          discription: "Quisque feugiat malesuada molestie.",

        },
        {
            key:"3",
            title:"Biking",
            url:{gaming},
            discription: "Quisque feugiat malesuada molestie.",
  
          },
      
      ])
  return (
    <div className='hobbies p-4 rounded-4 m-2'>
        <div>
        {hobbies.map((hobbie) => ( 
          <Row className='column-gap-2 pt-4'>
            
            <Col md={12}>
            <Image src={gaming}  className="rounded-4" fluid />
            </Col>
            <Col md={12} >
            <h4 className='fw-semibold'>{hobbie.title}</h4>
            </Col>
            <Col md={12}>
            <p>{hobbie.discription}</p>
            
            </Col>    
          </Row>
          
          
           
      ))}
      

        </div>
    </div>
  )
}

export default Hobbies