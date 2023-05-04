import React from 'react';
import HeaderOutlet from './HeaderOutlet';

const Main = () => {
    return (
        <div className="bg-img bg-cover" style={{height:'100%',weight:'100%',backgroundColor:'lightyellow'}}>
          <HeaderOutlet></HeaderOutlet>
          
        </div>
    );
};

export default Main;