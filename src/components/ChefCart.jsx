import React, { useEffect, useState } from 'react';
import Chef from './Chef';
import { CardGroup, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Gallary from './Gallary';

const ChefCart = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        fetch('https://chef-kitchenary-server-tanjumtanha.vercel.app/data')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setIsLoading(false);
              })
            .catch(error => console.log(error))
        }, 500);
    }, [id])

    const data1 = data.slice(0,3);
    const data2 = data.slice(3,6);
    
    if (isLoading) {
        return <div className='d-flex justify-content-center align-items-center'><Spinner animation="border" variant="danger" className='mx-auto'/></div>;
      }
    return (
        <div className='mt-4 text-center w-75 mx-auto'>
            <h2 className='text-danger py-2' style={{backgroundColor:'lightpink'}}>Some Rising Star of Japanese Cuisine</h2>
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

            <Gallary key={data.id}
                data={data}
            ></Gallary>
        </div>
    );
};

export default ChefCart;