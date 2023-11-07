import React from "react";
import image1 from "../../img/image 1.png";
import "./FarmerField.scss";
const FarmerField = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12 mt-3">
                            <div className="row">
                                <div className="col-8"> <h5>Farmer ID : SS0121UPIN</h5></div>
                                <div className="col-4"> <p>Sort by Newest</p></div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="">
                                <img className="fieldImg" src={image1} alt="logo" />
                            </div>
                        </div>
                        <div className="col-12 ">
                          <p className="mt-3 ms-3">All customers</p>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default FarmerField;
