import {Navbar, Container, Nav} from 'react-bootstrap'


const NavigasiBar = () => {
    return (
        <div>
        <Navbar  >
            <Container>
                <Navbar.Brand>Herbalindo</Navbar.Brand>
                <Nav>
                    <Nav.Link >Power Merchants</Nav.Link>
                    <Nav.Link>Products</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigasiBar