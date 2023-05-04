import React from 'react';

const Photo = ({data}) => {
    return (
        <div className='mx-md-auto'>
            {
                data.recipes.map((d,index)=> <div key={index}><div className='card mt-4'><img className='rounded m-4 ' style={{ height: '300px',width:'250px' }} src={d.image} alt="" />
                <p>Name: {d.name}</p></div></div>
                )
            }
        </div>
    );
};

export default Photo;