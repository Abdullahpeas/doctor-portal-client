import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoitmentBanner from '../AppoitmentBanner/AppoitmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <AppoitmentBanner></AppoitmentBanner>
        </div>
    );
};

export default Home;