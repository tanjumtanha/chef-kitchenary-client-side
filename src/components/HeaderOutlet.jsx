import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const HeaderOutlet = () => {
    // header will display in every page by making it outlet
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default HeaderOutlet;