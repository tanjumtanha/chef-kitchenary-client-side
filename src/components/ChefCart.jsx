import React, { useEffect, useState } from 'react';
import Chef from './Chef';
import { CardGroup } from 'react-bootstrap';

const ChefCart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.log(error))
    }, [])

    const data1 = data.slice(0,3);
    const data2 = data.slice(3,6);
    
    return (
        <div className='mt-4 text-center w-75 mx-auto'>
            <h2 className='text-danger'>Some Rising Star of Japanese Cuisine</h2>
            <div className='card-group gap-4 mb-4 mt-4'>
                {

                    data1.map(singleData => <Chef
                        key={singleData.id}
                        data={singleData}
                    ></Chef>)

                }
            </div>
            <div className='card-group gap-4'>
                {

                    data2.map(singleData => <Chef
                        key={singleData.id}
                        data={singleData}
                    ></Chef>)

                }
            </div>
        </div>
    );
};

export default ChefCart;