import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import './Home.css'

const Home = () => {
    return (
        <div className="main-container">
            <Navbar/>
            <Header/>
            <WhatWeDo/>
        </div>
    );
};

export default Home;