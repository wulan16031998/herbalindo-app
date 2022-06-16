import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';


const Intro = () => {
  return (
    <div className='intro'>
        <Container className='d-flex justify-content-center align-items-center text-center'>
          <Row>
            <Col>
              <div className='title'>Welcome in HerbalIndo</div>
              <div className='introButton mt-4'></div>
                <button variant='dark'>Lihat semua produk</button>
           </Col>
          </Row>
        </Container>
      </div>
  )
}

export default Intro