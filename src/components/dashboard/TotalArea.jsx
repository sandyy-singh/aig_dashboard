import React from "react";

const TotalArea = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="d-flex flex-column p-4 ">
                        <p className="">
                            <span className="fw-bold"> Total Area will be Covered (in ha.)</span>
                             <br />
                            <span className="fw-bold fs-6"> Sep. 2023 - Nov. 2023</span>
                        </p>
                        <div className="Area-container ">
                            <div className="d-flex ">
                                <div className="first"></div>
                                <p className="ms-sm-4">Agroforestry: 1, 500,000 ha.</p>
                            </div>
                            <div className="d-flex ">
                                <div className="second"></div>
                                <p className="ms-4">Forestry: 150,000 ha.</p>
                            </div>
                            <div className="d-flex ">
                                <div className="third"></div>
                                <p className="ms-4">Farming: 1, 500,000 ha.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalArea;
