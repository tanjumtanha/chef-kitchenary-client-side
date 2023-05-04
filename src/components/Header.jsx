import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ActiveRouter from './ActiveRouter';

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
                <Navbar.Brand href="#home"><span className='text-danger'>CHEF</span><span className='text-primary'> KITCHENARY</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto gap-2">
                        <ActiveRouter to='/'>Home</ActiveRouter>
                        <ActiveRouter to='/blog'>Blog</ActiveRouter>
                        <ActiveRouter to='/about'>About Us</ActiveRouter>
                    </Nav>
                    <Nav>
                        {/* tooltip used when user will hover the image icon it will show user name */}
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