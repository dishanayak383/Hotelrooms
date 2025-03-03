import React from "react";
import './History.css'
import { HiDotsHorizontal } from "react-icons/hi";
import { MdDone } from "react-icons/md";
import { FaRegFileArchive } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";

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
                                <img src="https://cdn-icons-png.freepik.com/256/9738/9738542.png?semt=ais_hybrid" width={"30px"} height={"35px"}/>
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
                                <img src="https://media.istockphoto.com/id/1299086428/vector/digital-dentistry-rgb-color-icon.jpg?s=612x612&w=0&k=20&c=ULyDpQAESJoThncL2XtOQgHmSBnfuJnjOoahQC6ct9E=" width={"30px"} height={"40px"}/>
                                <div className="e9">
                                    <p>Dentures</p>
                                </div>
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
                            <div className="f2">
                                <img src="https://png.pngtree.com/png-vector/20220628/ourmid/pngtree-dental-logo-template-vector-illustration-icon-design-png-image_5289867.png" width={"30px"} height={"60px"}/>
                                <div className="f9">
                                    <p>Whitening</p>
                                </div>
                            </div>
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
                            <div className="g2">
                                <img src="https://cdn-icons-png.freepik.com/256/9738/9738542.png?semt=ais_hybrid" width={"30px"} height={"35px"}/>
                                <div className="g9">
                                    <p>Implant</p>
                                </div>
                            </div>
                            <div className="g3">
                                <p>9 Jan 2023</p>
                            </div>
                            <div className="g4">
                                <p><MdDone /><div className="g8">Well done</div></p>
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
                <div className="column1">
                    <div className="row2">
                        <a>Agreement of document <div className="h1"><HiDotsHorizontal /></div></a>
                    </div>
                    <div className="row3">
                        <div className="h2">
                            <div className="t1">
                                <p><FaRegFileArchive /></p>
                            </div>
                            <div className="t2">
                                <div className="d10">
                                    <p>Agreement_Medication.zip</p>
                                </div>
                                <div className="d11">
                                    <a>2.3mb</a>
                                </div>
                            </div>
                            <div className="t3">
                                <p><IoCloudDownloadOutline /></p>
                            </div>
                        </div>
                        <div className="h3">
                            <div className="t4">
                                <p><FaRegFilePdf /></p>
                            </div>
                            <div className="t5">
                                <div className="d12">
                                    <p>Provision of information.pdf</p>
                                </div>
                                <div className="d13">
                                    <a>1.2mb</a>
                                </div>
                            </div>
                            <div className="t6">
                                <p><IoCloudDownloadOutline /></p>
                            </div>
                        </div>
                        <div className="h4">
                            <div className="t7">
                                <p><FaRegFileArchive /></p>
                            </div>
                            <div className="t8">
                                <div className="d14">
                                    <p>Agreement_Medication.zip</p>
                                </div>
                                <div className="d15">
                                    <a>2.3mb</a>
                                </div>
                            </div>
                            <div className="t9">
                                <p><IoCloudDownloadOutline /></p>
                            </div>
                        </div>
                        <div className="h5">
                            <div className="t10">
                                <lable><FaRegFilePdf /></lable>
                            </div>
                            <div className="t11">
                                <div className="d16">
                                    <p>Provision of information.pdf</p>
                                </div>
                                <div className="d17">
                                    <a>1.2mb</a>
                                </div>
                            </div>
                            <div className="t12">
                                <p><IoCloudDownloadOutline /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};


export default History;