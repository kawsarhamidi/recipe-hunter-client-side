import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoutes = () => {

    const {user} = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    if (user) {
        return children;
    }
    return <Navigate state={{from: useLocation}} to='/foods' replace></Navigate>
};

export default PrivetRoutes;