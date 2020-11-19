import React from 'react';
import AchievementsCards from './AchievementsCards';

const Achievements = () => {
    return (
        <div>
            <div className="container" style={{margin:'50px 0px'}}>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="center ">
                            <h3>Our Achievements</h3>
                            <p className="text-muted">
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout. The
                                point of using Lorem Ipsum is that it has a more-or-less normal
                                distribution of letter
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6">
                        <AchievementsCards/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;