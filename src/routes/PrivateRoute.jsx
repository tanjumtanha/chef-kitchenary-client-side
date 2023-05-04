import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location  = useLocation();
    
    if (loading) {
        return <div className='d-flex justify-content-center align-items-center'><Spinner animation="border" variant="danger" className='mx-auto'/></div>;
      }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to="/login" replace></Navigate>
};

export default PrivateRoute;