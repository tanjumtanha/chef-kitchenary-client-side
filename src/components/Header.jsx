import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handelSignOut = () => {
        signOutUser()
            .then()
            .catch(error => {
                toast.error(error.message, {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" border="danger">
            <Container>
                <Navbar.Brand className='text-danger' href="#home">CHEF KITCHENARY</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className='text-danger text-decoration-none me-2' to='/'>Home</Link>
                        <Link className='text-danger text-decoration-none me-2' to='/blog'>Blog</Link>
                        <Link className='text-danger text-decoration-none' to='/about'>About Us</Link>
                    </Nav>
                    <Nav>
                        { <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={<Tooltip id="tooltip">{user?.displayName}</Tooltip>}
                            >
                                <img src={user?.photoURL} alt="" style={{width:'45px'}} className='rounded-circle me-2' />
                             
                            </OverlayTrigger>
                        }

                        {
                            user ? <Button variant="secondary" onClick={handelSignOut}>Logout</Button> :
                                <Link to='/login'>
                                    <Button variant="secondary">Login</Button>
                                </Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;