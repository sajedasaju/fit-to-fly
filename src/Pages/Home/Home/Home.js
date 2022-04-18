import React from 'react';
import Banner from '../Banner/Banner';
import CustomSection from '../CustomSection/CustomSection';
import Services from './../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <CustomSection></CustomSection>
        </>
    );
};

export default Home;