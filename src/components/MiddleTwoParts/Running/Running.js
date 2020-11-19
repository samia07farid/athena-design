import React from 'react';
import run from '../../../images/20 [Converted]@2x.png';
import './Running.css';


const Running = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <img src={run} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6">
                        <div className="center">
                            <h3>Stay Running & Project</h3>
                            <p className="text-muted">
                                It is a long established fact that a reader will be distracted by the
                                readable content of a page when looking at its layout. The point of
                                using Lorem Ipsum is that it has a more-or-less normal distribution
                                of letter
                            </p>
                            <div>
                                <button className=" btn-brand">Contact Us</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Running;