import React from 'react';
import logo from '../../Assets/logo.png'
import '../../App.css';

import { Container, Navbar } from 'react-bootstrap';

const Nav = () => {
    return (
        <Container fluid className='yellow'>
            <Container fluid className='white'>
                <Navbar bg="light">
                    <Navbar.Brand href="/"><img src={logo} height='25%' width='25%' alt='Brand Logo' /></Navbar.Brand>
                </Navbar>
            </Container>
            <p>You don't have an account yet, please create a new account</p>
        </Container>
    )
}

export default Nav;