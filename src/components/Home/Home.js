import React from 'react';

import Footer from '../Footer/Footer';
import TeamPrice from '../TeamPrice/TeamPrice';

import Achievements from '../MiddleTwoParts/Achievements/Achievements';
import Running from '../MiddleTwoParts/Running/Running';


const Home = () => {
    return (
        <div>

            <TeamPrice/>
            <Footer/>


            <div className="mt-5">
                <Running />
            </div>
            <div className="mt-5">
                <Achievements />

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