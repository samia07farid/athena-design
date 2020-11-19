import React, { useState } from 'react';
import DoInfo from '../../fakedata/DoInfo';
import DoDetails from '../DoDetails/DoDetails';
import './WhatWeDo.css'

const WhatWeDo = () => {
    const [options, setOptions] = useState(DoInfo);
    return (
        <div>
            <div className="background">
                <h2 className="h2 pt-5" style={{textAlign:"center"}}>What we do</h2>
                <div style={{textAlign:"center", marginTop:"10px"}}>
                    <p className="p">our main focue is to make the user experience very simple and easy simplicity is our strength</p>
                </div>


                <div className="d-flex" style={{marginLeft:"72px"}}>
                    <div className="row pt-3 mb-5">
                        {
                            options.map(option => <DoDetails
                                option={option}
                                key={option.key}
                            ></DoDetails>)
                        }
                    </div>
                </div>



            </div>
        </div>
    );
};

export default WhatWeDo;