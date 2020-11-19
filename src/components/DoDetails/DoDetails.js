import React from 'react';
import './DoDetails.css'

const DoDetails = ({ option }) => {
    const { name, description, image } = option;
    return (
        <div>
            <div className="box text-center pt-3 ml-4 " style={{marginTop:"10px"}} >
                <div style={{margin:"20px"}}>
                    <img width="70px" src={image} alt="" />

                    <h5 className="mt-3 h5" >{name}</h5>
                    <p style={{ padding: "0px 10px 0px 10px" }} className="text-secondary mt-3 p2">{description} </p>
                </div>

            </div>
        </div>
    );
};

export default DoDetails;