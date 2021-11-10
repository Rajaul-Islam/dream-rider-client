import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Products from './Products/Products';
import Banner from '../Banner/Banner';

const Home = () => {
    return (

        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>

        </div>
    );
};

export default Home;