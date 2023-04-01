import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h4>404</h4>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorElement;