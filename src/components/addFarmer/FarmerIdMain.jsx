import React from 'react'
import "../dashboard/Main.scss"
import "./FarmerIdMain.scss"
import FarmerField from "./FarmerField"
import FarmerAccordion from "./FarmerAccordion"
import Doughunt from "./Doughunt"
import FarmerTable from "./FarmerTable"
const FarmerIdMain = () => {
    return (
        <div className="conatiner-fluid  conatiner-main">
            <div className="row content">
                <div className="col-md-8 ">
                    <div className="FarmerIdBox1">
                        <FarmerField />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="FarmerIdBox2 ">
                        <FarmerAccordion />
                    </div>
                </div>
                <div className="col-md-8 ">
                    <div className="FarmerIdBox3">
                      <FarmerTable />
                        
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="FarmerIdBox4">
                    <Doughunt />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FarmerIdMain
