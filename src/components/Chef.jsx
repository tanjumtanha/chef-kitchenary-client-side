import React from 'react';
import { Button } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chef = ({ data }) => {
    const { id, name, picture, experience, recipes, likes } = data;

    return (
        <div className="card p-3" style={{ backgroundColor: 'lightcyan' }}>
            <img style={{ height: '300px' }} src={picture} alt="" />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <h6>Years of experience : {experience}</h6>
                <h6>Recipes : {recipes.length}</h6>
                <div>
                    {recipes.map((recipe,index) => <li key={index} className='ms-0'>{recipe.name}</li>)}
                </div>
            </div>

            <div className='mb-2'>
                <FaThumbsUp className='text-danger'></FaThumbsUp> <span >{likes}</span>
            </div>
            <Link to={`/details/${id}`}><Button className='btn-danger'>View Details</Button></Link>

        </div>
    );
};

export default Chef;