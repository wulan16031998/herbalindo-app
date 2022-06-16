import React from 'react'
import {Card, Col, Container, Row, Image} from 'react-bootstrap'
import adas_manis from "../assets/images/newproduct/adas_manis.jpg"
import lempuyang from "../assets/images/newproduct/lempuyang.jpg"
import temu_ireng from "../assets/images/newproduct/temu_ireng.jpg"
import temulawak from "../assets/images/newproduct/temulawak.jpg"


const NewProduct = () => {
  return (
    <Container>
    <br>
    </br>
        <h1 className="text-center">New products</h1>
        <Row>
        <br></br>
            <Col md={4} className='movieWrapper'>
                <Card className="herbalImage m-2">
                    <Image src={adas_manis} alt="adasmanis" height='300px' />
                         <div className='bg-dark text-white'>
                            <Card.Title className='text-center'>Adas Manis</Card.Title>
                                <Card.Text className=' text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                        </div>
                 </Card>
            </Col>
            <Col md={4} className='movieWrapper'>
                <Card className="herbalImage m-2">
                    <Image src={lempuyang} alt="Lempuyang" height='300px' />
                         <div className='bg-dark text-white'>
                            <Card.Title className='text-center'>Lempuyang</Card.Title>
                                <Card.Text className=' text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                        </div>
                 </Card>
            </Col>
            <Col md={4} className='movieWrapper'>
                <Card className="herbalImage m-2">
                    <Image src={temu_ireng} alt="temu_ireng" height='300px' />
                         <div className='bg-dark text-white'>
                            <Card.Title className='text-center'>temu_ireng</Card.Title>
                                <Card.Text className=' text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                        </div>
                 </Card>
            </Col>
            <Col md={4} className='movieWrapper'>
            <Card className="herbalImage m-2">
                <Image src={temulawak} alt="temulawak" height='300px' />
                     <div className='bg-dark text-white'>
                        <Card.Title className='text-center'>temulawak</Card.Title>
                            <Card.Text className=' text-left'>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                    </div>
             </Card>
        </Col>
        
        </Row>
    </Container>
    
  )
}

export default NewProduct