import React from 'react';

const Photo = ({data}) => {
    return (
        <div className='mx-md-auto'>
            {
                data.recipes.map(d => <div><img className='rounded m-4 ' style={{ height: '300px',width:'250px' }} src={d.image} alt="" />
                <p>Name: {d.name}</p></div>
                )
            }
        </div>
    );
};

export default Photo;