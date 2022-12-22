import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    children: React.ReactNode;
    user: {
        token: Boolean;
    };
}

const PrivateRoute = (props: PrivateRouteProps) => {
    const { children, user } = props;
    if (!user.token) {
        return (<Navigate to="/login" />);
    }
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};

export default PrivateRoute;
