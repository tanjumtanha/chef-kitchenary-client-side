import React from 'react';
import Banner from './Banner';
import ChefCart from './ChefCart';
import UploadRecipe from './UploadRecipe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefCart></ChefCart>
            <UploadRecipe></UploadRecipe>
        </div>
    );
};

export default Home;