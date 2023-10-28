import React from "react";
import "./Main.scss";

const Main = () => {
    return (
        <div className="conatiner-fluid main conatiner-main">
            <div className="row content">
                <div className="col-md-5 ">
                    <div className="box"></div>
                </div>
                <div className="col-md-5 ">
                    <div className="box"></div>
                </div>
                <div className="col-md-2 ">
                    <div className="box3"></div>
                </div>
                <div className="col-md-6">
                    <div className="states"></div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-12">
                            <div className="Growth1"></div>
                        </div>
                        <div className="col-md-4">
                            <div className="Growth2"></div>
                        </div>
                        <div className="col-md-4">
                            <div className="Growth3"></div>
                        </div>
                        <div className="col-md-4">
                            <div className="Growth4"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className=" chats"></div>
                        </div>
                        <div className="col-md-6">
                            <div className=" chats"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className=" chats"></div>
                </div>
            </div>
        </div>
    );
};

export default Main;
