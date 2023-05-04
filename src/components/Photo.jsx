import React from 'react';

const Photo = ({data}) => {
    return (
        <div className='mx-md-auto'>
            {
                data.recipes.map(d => <img className='rounded m-4 ' style={{ height: '300px',width:'250px' }} src={d.image} alt="" />)
            }
        </div>
    );
};

export default Photo;