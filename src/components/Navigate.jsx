import React from 'react';
import {Navbar, Nav, Container, Form, FormControl, Button} from 'react-bootstrap';

const Navigate = () => {
    return (
        <Navbar expand="lg" className="playbill">
            <Container>
                <Navbar.Brand className="text-dark fs-1 playbill-brand" href="#home">BROADWAY MUSICAL REVIEWS</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='https://www.broadway.com/' target='_blank' className='playbill-link'>See a show!</Nav.Link>
                    </Nav>
                    <Form className="d-flex">  
                        <FormControl  
                            type="search"  
                            placeholder="Search"  
                            className="me-2"  
                            aria-label="Search"/>  
                        <Button class='playbill-link'>Search</Button>  
                    </Form> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigate;