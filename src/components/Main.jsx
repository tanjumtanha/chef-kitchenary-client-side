import React from 'react';
import HeaderOutlet from './HeaderOutlet';
import Footer from './Footer';

const Main = () => {
    return (
        <div className="bg-img bg-cover" style={{height:'100%',weight:'100%',backgroundColor:'lightyellow'}}>
          {/* header and footer will display in every page */}
          <HeaderOutlet></HeaderOutlet>
          <Footer></Footer>
        </div>
    );
};

export default Main;