import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {

    const [error, setError] = useState('');
    const { createUser, updateUserData } = useContext(AuthContext);
    const navigate = useNavigate();

    //setError('');
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // console.log(name,email,photo,password)
        if (password.length < 6) {
            setError('Your password need to have at-least 6 character!');
            return;
        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('');
                toast.success('You have created your account successfully!!', {
                    position: toast.POSITION.TOP_CENTER
                });
                form.reset();
                updateUserData(createdUser,name,photo);
                navigate('/login');
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <Container className='w-50 mx-auto mt-3'>
            <h3 className='text-danger text-center'>Please Register</h3>
            <Form className='border border-danger p-3' onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter Your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password"/>
                </Form.Group>
                <Button variant="danger" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className='text-secondary'>
                    Already have an account? Please <Link to='/login' className='text-danger'>Login</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;