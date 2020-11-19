import React from 'react';
import Achievements from '../MiddleTwoParts/Achievements/Achievements';
import Running from '../MiddleTwoParts/Running/Running';

const Home = () => {
    return (
        <div>

            <div className="mt-5">
                <Running />
            </div>
            <div className="mt-5">
                <Achievements />
            </div>
        </div>
    );
};

export default Home;