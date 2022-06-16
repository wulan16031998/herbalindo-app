import React from 'react'
import {Card, Col, Container, Row, Image} from 'react-bootstrap'
import peka from "../assets/images/powermerchant/peka.jpg"
import cengkeh from "../assets/images/powermerchant/cengkeh.jpg"
import Jahe from "../assets/images/powermerchant/jahe.jpg"
import ketumbar from "../assets/images/powermerchant/ketumbar.jpg"
import daun_pepaya from "../assets/images/powermerchant/daun_pepaya.jpg"

const PowerMerchants = () => {
  return (
    <Container>
    <br>
    </br>
        <h1 className="text-center"> Power Merchant products</h1>
        <Row>
        <br></br>
            <Col md={4} className='movieWrapper'>
                <Card className="herbalImage m-2">
                    <Image src={peka} alt="peka" height='300px' />
                         <div className='bg-dark text-white'>
                            <Card.Title className='text-center'>Peka</Card.Title>
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
                    <Image src={cengkeh} alt="cengkeh" height='300px' />
                         <div className='bg-dark text-white'>
                            <Card.Title className='text-center'>Cengkeh</Card.Title>
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
                    <Image src={ketumbar} alt="ketumbar" height='300px' />
                         <div className='bg-dark text-white'>
                            <Card.Title className='text-center'>Ketumbar</Card.Title>
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
                <Image src={daun_pepaya} alt="daunpepaya" height='300px' />
                     <div className='bg-dark text-white'>
                        <Card.Title className='text-center'>Daun Pepaya</Card.Title>
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
            <Image src={Jahe} alt="Jahe" height='300px' />
                 <div className='bg-dark text-white'>
                    <Card.Title className='text-center'>Jahe</Card.Title>
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

export default PowerMerchants