import React from 'react';
import Featured from '../../components/Featured/Featured';
import Banner from '../../components/Featured/Banner/Banner';
import Welcome from '../../components/Welcome/Welcome';

const Home = () => {
    return (
        <div>
            <h3>This is banner</h3>
            <Banner></Banner>
            <Welcome></Welcome>
            <Featured></Featured>
        </div>
    );
};

export default Home;