import React from 'react';
import HeaderOutlet from './HeaderOutlet';
import Footer from './Footer';
import { ScrollRestoration } from 'react-router-dom';

const Main = () => {
    return (
        <div className="bg-img bg-cover" style={{height:'100%',weight:'100%',backgroundColor:'lightyellow'}}>
          {/* header and footer will display in every page */}
          <HeaderOutlet></HeaderOutlet>
          <Footer></Footer>
          <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Main;