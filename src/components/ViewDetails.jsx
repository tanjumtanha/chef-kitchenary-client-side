import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ViewDetails = () => {
    const { id } = useParams();
    const chefCategory = useLoaderData();
    const { name, picture, experience, likes, bio, recipes } = chefCategory;

    const [disable, setDisable] = useState(false);
    const handelDisable = () =>{
        toast.success('You have added this chef items on your favorite list!!', {
            position: toast.POSITION.TOP_CENTER
        });
        setDisable(true);
    }
    return (
        <div className='w-75 mx-auto mb-4'>
            <div className='mb-4'>
                <div className="card p-3 d-flex flex-md-row gap-4" style={{ backgroundColor: 'lightcyan' }}>
                    <div>
                        <img className='mt-4 rounded' style={{ height: '300px', width: '300px' }} src={picture} alt="" />
                    </div>
                    <div className='p-3'>
                        <div className="card-body">
                            <h4 className="card-title fs-4">Name: {name}</h4>
                            <h6>Years of experience : {experience}</h6>
                            <h6>Recipes : {recipes.length}</h6>
                            <div>
                                {recipes.map((recipe,index) => <li key={index} className='ms-0'>{recipe.name}</li>)}
                            </div>
                            <p className='fs-5'>BIO: {bio}</p>
                            <div className='mb-2'>
                                <FaThumbsUp></FaThumbsUp> <span >{likes}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <h2 className='my-4 text-center'>Some Delicious Recipes of {name}</h2>
            <div className='py-4'>
            <div className='card-group gap-4'>
                {

                    recipes.map(singleData => <div className="card p-3" style={{ backgroundColor: 'lightcyan' }}>
                        <img className='rounded' style={{ height: '300px' }} src={singleData.image} alt="" />
                        <div className="card-body">
                            <h4 className="card-title">{singleData.name}</h4>
                            <h5>Ingredients:</h5>
                            <div>
                                {singleData.ingredients.map((recipe, index) => <li key={index} className='ms-0'>{recipe}</li>)}
                            </div>
                            <p className='mt-2'><span className='fs-5'>Cooking Methods:</span> {singleData.cooking_method}</p>
                            <div className='mb-2'>
                                <FaThumbsUp></FaThumbsUp> <span >{singleData.rating}</span>
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