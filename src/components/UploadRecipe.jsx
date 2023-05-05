import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UploadRecipe = () => {
    return (
        <Container className="my-5 py-4">
            <h2 className='text-danger text-center py-2 mb-3' style={{ backgroundColor: 'lightpink' }}>Would you like to share your recipes with us?</h2>
            <Row className='p-4 mt-3' style={{ backgroundColor: 'lightcyan' }}>
                <Col md={6} className="text-center">
                    <img style={{ width: '100%' }} src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg" alt="" />
                </Col>
                <Col md={6}>
                    <h5 >Your Email</h5>
                    <input type="email" name="" id="" placeholder='Your Email' style={{ width: '100%', height: '30px' }} />
                    <br />
                    <h5 className='mt-2'>Your Name</h5>
                    <input type="text" name="" id="" placeholder='Your Name' style={{ width: '100%', height: '30px' }} />
                    <br />
                    <h5 className='mt-2'>Upload Your Recipe Photo</h5>
                    <input type="text" name="" id="" placeholder='Photo url' style={{ width: '100%', height: '30px' }} />
                    <br />

                    <h5 className='mt-2'>Your Recipe</h5>
                    <input type="text" name="" id="" placeholder='Write your recipe here' style={{ width: '100%', height: '100px' }} />
                    <br />
                    <br />
                    <Link to=''><Button className='btn-danger'>Submit</Button></Link>
                </Col>
            </Row>
        </Container>
    );
};

export default UploadRecipe;