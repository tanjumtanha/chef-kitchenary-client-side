import React from 'react';

const Photo = ({data}) => {
    return (
        <div className='mx-auto'>
            {
                data.recipes.map(d => <img className='rounded m-4 ' style={{ height: '300px',width:'300px' }} src={d.image} alt="" />)
            }
        </div>
    );
};

export default Photo;