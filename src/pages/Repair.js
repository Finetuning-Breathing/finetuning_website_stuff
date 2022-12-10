import React from "react";
import "./RepairStyleSheet.css";
import sax from "../assets/alto-sax.jpg";
import drum from "../assets/repairdrum.jpeg";

export default function Repair(){
    return (
        <div className="body">
        <h2>FineTuning Repairs</h2>
        <div className="row">
            <div>
                <div className="welcome-text-wrapper">
                    <h2 className="text-center">WOODWIND AND BRASS REPAIRS</h2>
                    <p className="text-center">Brass and woodwind instrument repairs of the highest caliber
                        are offered at FineTuning.
                        We have the equipment and expertise to solve practically any issue thanks to
                        our more than 40 years of experience! For music ensembles like the FSU Marching
                        Chiefs,
                        FAMU Marching 100, and other middle school and high school bands, we only fix
                        instruments.
                        You may relax knowing that your instrument will receive maintenance and repairs from
                        our
                        highly qualified professionals!</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="text-center retail-info-box">
                    <div className="retail-location">
                        <a href="#">
                            <img className="image-repairs" src={sax} alt="sax"/>
                        </a>
                        <a href="#">
                            <em>CLICK FOR WOODWIND & BRASS REPAIR PRICE SHEET</em>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6">
                <div className="welcome-text-wrapper">
                    <h2 className="text-center">PERCUSSION/STRINGS REPAIRS</h2>
                    <p className="text-center">This section will be available soon!
                        Please return for a repair price list.
                        If you have any questions about a guitar or orchestral string repair,
                        please call us at (800) 848-6158 or use our contact form on our "contact us" page! </p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="text-center retail-info-box">
                    <div className="retail-location">
                        <a href="#">
                            <img className="image-repairs" src={drum} alt="drum"/>
                        </a>
                        <em>PERCUSSION/STRINGS REPAIR SHEET COMING SOON!</em>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}