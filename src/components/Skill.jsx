import React from 'react'
import { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Skill.css'
import { Col, Row } from 'react-bootstrap';

function Skill() {
  const [skills,setSkills]=useState([
    {
      title:"React",
      level:"80"
    },
    {
      title:"Javascript",
      level:"90"
    },
    {
      title:"CSS",
      level:"100"
    },
    {
      title:"Vue",
      level:"60"
    },
    {
      title:"Redux",
      level:"60"
    }
  ])
 

 
  return (
    <div className='skill p-4 rounded-4 m-2'>
        <div>
          <h6 className='fw-semibold py-3'>FRONT END</h6>
        {skills.map((skill) => ( 
          <Row className='column-gap-2 pt-4'>
            <Col lg={2} md={2}  sm={2}>
            <p className='text-wrap'>{skill.title}</p>
            </Col>
            <Col lg={9} md={9}  sm={9}>
            <ProgressBar  now={skill.level} label={`${skill.level}%`} visuallyHidden  />
            </Col>    
          </Row>
          
           
      ))}

        </div>
    </div>
  )
}

export default Skill