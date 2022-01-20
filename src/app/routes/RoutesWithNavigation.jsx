import React from 'react';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
/**
 * Component RouteWithNavigation
 * To create the structure of the application (nav bar, routes, toast, etc...)
 * 
 * @author Jérémy Dejonghe
 */
const RoutesWithNavigation = () => {

    return (
        <BrowserRouter>
            <div className="">
                <main className="">
                    <Routes />
                </main>
            </div>
        </BrowserRouter>
    );
};

export default RoutesWithNavigation;