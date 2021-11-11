import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Products from './Products/Products';
import Banner from '../Banner/Banner';
import UserReview from '../UserReview/UserReview';

const Home = () => {
    return (

        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <UserReview></UserReview>

        </div>
    );
};

export default Home;