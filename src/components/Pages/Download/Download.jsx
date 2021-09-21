import React from "react";
import "./Download.css";
import LAPTOP from "../../../images/laptop.svg";
import APP from "../../../images/appstore.png";
import PLAY from "../../../images/playstore.png";
import MICRO from "../../../images/microsoft.png";
import DEVICES from "../../../images/device.svg";

const Download = () => {
    return (
        <>
            {/* DOWNLOAD HEAD */}
            <div className="container-fluid py-4 download-head">
                <div className="row py-5">
                    <div className="col-md-12 text-center lh-lg">
                        <img src={LAPTOP} className="py-4" alt="" width="200" />
                        <h1 className="fw-bold mt-3">Download Spotify</h1>
                        <p className="lead">Play millions of songs on your device.</p>
                        <button className="btn btn-light rounded-pill text-dark px-5 py-3 mt-3">
                            Download
                        </button>
                    </div>
                </div>
            </div>
            {/* DOWNLOAD HEAD */}
            <div className="container-fluid py-5">
                <div className="row py-4">
                    <div className="col-md-12 text-center">
                        <h1 className="fw-bold mt-3">Bring your music to mobile and tablet, too.</h1>
                        <p className="lead">Listening on your phone or tablet is free, easy, and fun.</p>
                    </div>
                    <div className="row d-flex justify-content-center justify-content-sm-around pt-4">
                        <div className="col-md-2 text-center">
                            <img src={APP} className="img-fluid" alt="" width="120" />
                        </div>
                        <div className="col-md-2 text-center">
                            <img src={PLAY} className="img-fluid" alt="" width="120" />
                        </div>
                        <div className="col-md-2 text-center">
                            <img src={MICRO} className="img-fluid" alt="" width="120" />
                        </div>
                    </div>
                </div>
            </div>
            {/* DOWNLOAD HEAD */}

            {/* DOWNLOAD DEVICES */}
            <div className="container-fluid py-5 downloadDevices">
                <div className="row py-4 d-flex justify-content-center">
                    <div className="col-md-5">
                        <img src={DEVICES} alt="" className="img-fluid" width="600" />
                        <h2 className="fw-bold text-center text-white mt-4">
                            One account, listen everywhere.
                        </h2>

                    </div>
                </div>
            </div>
            {/* DOWNLOAD DEVICES */}
        </>
    );
};

export default Download;
