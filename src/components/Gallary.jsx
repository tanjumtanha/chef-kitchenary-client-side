import React from 'react';
import Photo from './Photo';

const Gallary = ({data}) => {
    return (
        <div>
            <h2 className='my-4 text-danger py-2' style={{backgroundColor:'lightpink'}}>Album of Some Delicious Food</h2>
            <div className='card-group'>
            {
                data.map(d=><Photo
                key={data.id}
                data = {d}
                ></Photo>)
            }
            </div>
        </div>
    );
};

export default Gallary;