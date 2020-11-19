import React from 'react';
import happy from '../../../images/happy@2x.png';
import cup from '../../../images/marketing@2x.png';
import star from '../../../images/surface1@2x.png';
import rocket from '../../../images/transportation@2x.png';
import './Achievements.css';

const AchievementsCards = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-6 col-sm-12">
                    <div className="happy ">
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-5">
                                <img src={happy} className="mt-3 img" height="60" alt="" />
                            </div>
                            <div className="col-md-7 ">
                                <span className=" ">
                                    <h2>700+</h2>
                                    <span>Happy Clients</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 col-sm-12 ">
                    <div className="cup ">
                        <div className="row">
                            <div className="col-md-5">
                                <img src={cup} className="mt-3" height="60" alt="" />
                            </div>
                            <div className="col-md-7 ">
                                <span className=" ">
                                    <h2>140+</h2>
                                    <span>Projects Completed</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12 col-lg-6 col-sm-12">
                    <div className="star">
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-5">
                                <img src={star} className="mt-3" height="60" alt="" />
                            </div>
                            <div className="col-md-7 ">
                                <span className=" ">
                                    <h2>25+</h2>
                                    <span>Crazy Minds</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 col-sm-12 ">
                    <div className="rocket">
                        <div className="row">
                            <div className="col-md-5">
                                <img src={rocket} className="mt-3" height="60" alt="" />
                            </div>
                            <div className="col-md-7 ">
                                <span className=" ">
                                    <h2>75+</h2>
                                    <span>Running Projects</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementsCards;