import React from "react";
import './History.css'
import { HiDotsHorizontal } from "react-icons/hi";
import { MdDone } from "react-icons/md";

export const History=()=>{
    return(
        <div className="container">
            <div className="sub-container">
                <div className="column">
                    <div className="row">
                        <a>History Dental</a>
                    </div>
                    <div className="row1">
                        <div className="a1">
                            <div className="b1">
                                <p>ID</p>
                            </div>
                            <div className="b2">
                                <p>Type Treatment</p>
                            </div>
                            <div className="b3">
                                <p>Date</p>
                            </div>
                            <div className="b4">
                                <p>Result Treatment</p>
                            </div>
                            <div className="b5">
                                <p>Payment status</p>
                            </div>
                        </div>
                        <div className="a2">
                            <div className="c1">
                                <p>#12324</p>
                            </div>
                            <div className="c2">
                                <img src="https://static.wixstatic.com/media/0f903b_5ea69a65d6e148c8828ddeb52c12d29b~mv2.png/v1/fill/w_290,h_226,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/dental-implant-treatment-page-icon.png" width={"40px"} height={"60px"}/> 
                                <div className="c9">
                                    <p>Implant</p>
                                </div>
                            </div>
                            <div className="c3">
                                <p>12 Jun 2023</p>
                            </div>
                            <div className="c4">
                                <p><MdDone /><div className="c8">Well done</div></p>
                                
                            </div>
                            <div className="c5">
                                <div className="c7">
                                    <a>Pending</a> 
                                </div>
                            </div>
                            <div className="c6">
                                <p><HiDotsHorizontal /></p>
                            </div>
                        </div>
                        <div className="a3">
                            <div className="d1">
                                <p>#20324</p>
                            </div>
                            <div className="d2">
                                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/endodontics-2495421-2123547.png" width={"30px"} height={"40px"}/>
                                <div className="d9">
                                    <p>Route canal</p>
                                </div>
                            </div>
                            <div className="d3">
                                <p>4 May 2023 </p>
                            </div>
                            <div className="d4">
                                <p><MdDone /><div className="d8">Well done</div></p>
                                
                            </div>
                            <div className="d5">
                                <div className="d7">
                                    <a>Paid</a>
                                </div>
                            </div>
                            <div className="d6">
                                <p><HiDotsHorizontal /></p>
                            </div>
                        </div>
                        <div className="a4">
                            <div className="e1">
                                <p>#57686</p>
                            </div>
                            <div className="e2">
                                <img src="https://media.istockphoto.com/id/1299086428/vector/digital-dentistry-rgb-color-icon.jpg?s=612x612&w=0&k=20&c=ULyDpQAESJoThncL2XtOQgHmSBnfuJnjOoahQC6ct9E="/>
                            </div>
                            <div className="e3">
                                <p>2 Mar 2023</p>
                            </div>
                            <div className="e4">
                                <p><MdDone /><div className="e8">Well done</div></p>
                            </div>
                            <div className="e5">
                                <div className="e7">
                                    <a>Paid</a>
                                </div>
                            </div>
                            <div className="e6">
                                <p><HiDotsHorizontal /></p>

                            </div>
                        </div>
                        <div className="a5">
                            <div className="f1">
                                <p>#68767</p>
                            </div>
                            <div className="f2"></div>
                            <div className="f3">
                                <p>16 Feb 2023</p>
                            </div>
                            <div className="f4">
                                <p><MdDone /><div className="e8">Well done</div></p>
                            </div>
                            <div className="f5">
                                <div className="f7">
                                    <a>Paid</a>
                                </div>
                            </div>
                            <div className="f6">
                                <p><HiDotsHorizontal /></p>

                            </div>
                        </div>
                        <div className="a6">
                            <div className="g1">
                                <p>#69696</p>
                            </div>
                            <div className="g2"></div>
                            <div className="g3">
                                <p>9 Jan 2023</p>
                            </div>
                            <div className="g4">
                                <p><MdDone /><div className="e8">Well done</div></p>
                            </div>
                            <div className="g5">
                                <div className="g7">
                                    <a>Paid</a>
                                </div>
                            </div>
                            <div className="g6">
                                <p><HiDotsHorizontal /></p>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="column1"></div>
            </div>
        </div>
    );

};


export default History;