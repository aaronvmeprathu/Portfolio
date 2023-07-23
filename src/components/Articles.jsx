import React from 'react'
import './Articles.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import cssImg from './cssimg.jpeg'

function Articles() {
  return (
    <div>
      <div className='articles p-4 rounded-4 m-2'>
        <Row>
          <p className='article-title pb-3'>Blog</p>
          <Col md={4} sm={4}>
          <h3>How to organize your CSS</h3>
          </Col>
          <Col md={8} sm={8}>
          <Image className='rounded-4' src={cssImg} fluid />
          
          </Col>
          <Col md={10}>
                    <p className='pt-5 gray '>In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.  

                     Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
                    </p>
                    <div className='pt-5 '>
                    <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover " href="#">
                 dev.to
                 </a>

                    </div>
                 
          </Col>
        </Row>


      </div>
    </div>
  )
}

export default Articles