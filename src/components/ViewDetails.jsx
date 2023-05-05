import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import LazyLoad from 'react-lazy-load';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ViewDetails = () => {
    const { id } = useParams();
    const chefCategory = useLoaderData();
    const { name, picture, experience, likes, bio, recipes } = chefCategory;

    const [disable, setDisable] = useState(false);
    const handelDisable = () => {
        toast.success('You have added this chef items on your favorite list!!', {
            position: toast.POSITION.TOP_CENTER
        });
        setDisable(true);
    }
    return (
        <div className='w-75 mx-auto mb-4'>
            <div className='mb-4'>
                <Row className='p-4 mt-3' style={{ backgroundColor: 'lightcyan' }}>
                    <Col md={6} className="text-center">
                        <LazyLoad offsetVertical={500} offsetHorizontal={500}>
                            <img className='rounded mt-4 w-100' style={{ height: '300px' }} src={picture} alt="" />
                        </LazyLoad>
                    </Col>
                    <Col md={6}>
                        <div className="card-body">
                            <h4 className="card-title fs-4">Name: {name}</h4>
                            <h6>Years of experience : {experience}</h6>
                            <h6>Recipes : {recipes.length}</h6>
                            <div>
                                {recipes.map((recipe, index) => <li key={index} className='ms-0'>{recipe.name}</li>)}
                            </div>
                            <p className='fs-6'>BIO: {bio}</p>
                            <div className='mb-2 fs-4'>
                                <FaThumbsUp className='text-danger'></FaThumbsUp> <span>{likes}</span>
                            </div>
                            <Link to='/'><Button className='btn-danger'>Go To Home</Button></Link>
                        </div>
                    </Col>

                </Row>
            </div>
            <h2 className='my-4 text-center'>Some Delicious Recipes of {name}</h2>
            <div className='py-4'>
                <div className='card-group gap-4'>
                    {

                        recipes.map((singleData, index) => <div key={index} className="card p-3" style={{ backgroundColor: 'lightcyan' }}>
                            <img className='rounded' style={{ height: '300px' }} src={singleData.image} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">{singleData.name}</h4>
                                <h5>Ingredients:</h5>
                                <div>
                                    {singleData.ingredients.map((recipe, index) => <li key={index} className='ms-0'>{recipe}</li>)}
                                </div>
                                <p className='mt-2'><span className='fs-5'>Cooking Methods:</span> {singleData.cooking_method}</p>
                                <div className='mb-2 d-flex'>
                                    <Rating
                                        style={{ maxWidth: 150 }}
                                        value={singleData.rating}
                                        readOnly
                                    />
                                    <div className='ms-2 fs-4'>{singleData.rating}</div>
                                </div>
                            </div>
                            <Button disabled={disable} className='btn-danger' onClick={handelDisable}>Favorite</Button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;