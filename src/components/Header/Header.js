import React from 'react';
import './Header.css'
import image from '../../Illustration/header.png'

const Header = () => {
    return (
        <div className="container-md container-sm">
            <div className=" d-flex mt-5">
            <div className="col-md-6 col-12 col-sm-12">
                <h1>Florence <br /> agency</h1>
                <p className="header-p text-secondary mt-5">Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
                <button class="btn common-btn mt-5">See Pricing</button>
            </div>
            <div className="col-md-6 col-12 col-sm-12 img-res">
                <img className="img-fluid" src={image} width="550px" alt=""/>
            </div>
        </div>
        </div>
    );
};

export default Header;