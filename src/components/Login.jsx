import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FaGithubAlt, FaGoogle } from "react-icons/fa";



const Login = () => {
    const [error,setError] = useState('');
    const { signInUser,googleSignIn,githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handelGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate('/');
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    const handelGithubSignIn = () =>{
        githubSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate('/');
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    const handleSignIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signInUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setError('');
            form.reset();
            navigate('/');
        })
        .catch(error =>{
            setError(error.message);
        })
    }

    return (
        <Container className='w-50 mx-auto mt-3'>
            <h3 className='text-danger text-center'>Please Login</h3>
            <Form className='border border-danger p-3' onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Login
                </Button>
                <div className='mt-2'>
                    <Button className='me-3 border border-danger' variant="light" onClick={handelGoogleSignIn}><FaGoogle className='me-2 text-danger'></FaGoogle>Google</Button>
                    <Button className='border border-danger' variant="light" onClick={handelGithubSignIn}><FaGithubAlt className='me-2 text-danger'></FaGithubAlt>Github</Button>
                </div>
                <Form.Text>Don't have an account? Please <Link to='/register' className='text-danger'>Register</Link></Form.Text>
                <br />
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;