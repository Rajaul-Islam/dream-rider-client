import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Navbar className='header' bg="dark" expand="lg">
            <Container >
                <Navbar.Brand className='text-white' as={NavLink} to='/home'>
                    <img
                        alt=""
                        src=''
                        width="150"
                        height="50"
                        className="d-inline-block align-top"
                    />{''}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='text-white' as={NavLink} to='/home'>Home</Nav.Link>
                        <Nav.Link className='text-white' as={NavLink} to='/bikes'>Bikes</Nav.Link>
                        <Nav.Link className='text-white' as={NavLink} to='/about'>About</Nav.Link>
                       
                        <Nav.Link className='text-white' as={NavLink} to='/dashboard'>Dashboard</Nav.Link>

                        <>
                            {
                                user.displayName ?
                                    <>
                                        <Nav.Link className='text-white' onClick={logout}> hi! {user.displayName} {" "}Logout</Nav.Link>



                                    </>




                                    :


                                    <>

                                        <Nav.Link className='text-white' as={NavLink} to='/register'>Register</Nav.Link>
                                        <Nav.Link className='text-white' as={NavLink} to='/login'>Login</Nav.Link>



                                    </>
                            }
                        </>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;