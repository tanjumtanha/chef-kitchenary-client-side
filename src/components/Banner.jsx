import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel variant="dark" >
            <Carousel.Item>
                <img style={{height:'400px'}}
                    className="d-block w-75 mx-auto"
                    src="https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/Traditional-Japanese-Food-Onigiri.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='fs-2'>Enjoy Cooking</h3>
                    <h5 className='fs-4'>Browse through over many tasty recipe!</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height:'400px'}}
                    className="d-block w-75 mx-auto"
                    src="https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/Traditional-Japanese-Food-Onigiri.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className='fs-2'>Ultimate Book of Recipes</h3>
                    <h5 className='fs-4'>You can see many tasty recipes from here!</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height:'400px'}}
                    className="d-block w-75 mx-auto"
                    src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/03/18/0/FNK_CHICKEN_KATSU_H_f_s4x3.jpg.rend.hgtvcom.616.493.suffix/1616083203181.jpeg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className='fs-2'>Best Recipes</h3>
                    <h5 className='fs-4'>See our best recipe from our best chef and try it at home!
                    </h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;