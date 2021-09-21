import React from "react";
import { NavLink } from "react-router-dom";
import "./Premium.css";
import { FaCheck } from "react-icons/fa";
import MUSIC1 from "../../../images/music1.jpg";
import MUSIC2 from "../../../images/music2.jpg";
import MUSIC3 from "../../../images/music3.jpg";
import MUSIC4 from "../../../images/music4.jpg";
import STICKER1 from "../../../images/sticker1.png";
import STICKER2 from "../../../images/sticker2.png";
import STICKER3 from "../../../images/sticker3.png";
import STICKER4 from "../../../images/sticker4.png";


const Premium = () => {
    return (
        <>
            {/* HEAD SECTION */}
            <div className="container-fluid hero-row py-4">
                <div className="row py-5">
                    <h2 className="text-center fw-bold lh-lg blackText">
                        Get Premium for the whole family
                    </h2>
                    <p className="text-center fw-bold lh-lg blackText">
                        Family members living under one roof can enjoy up to 6 Premium accounts. One-time
                        plans from ₹199
                    </p>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-2 col-sm-12 py-3">
                        <button className="btn blackButton-hero-1 rounded-pill px-5 py-3">
                            GET PREMIUM FAMILY
                        </button>
                    </div>
                    <div className="col-md-2 col-sm-12 py-3 ">
                        <button className="btn blackButton-hero-2 rounded-pill px-5 py-3">
                            SEE OTHER PLANS
                        </button>
                    </div>
                    <NavLink to="/" className="text-center blackText mt-3">
                        Terms and conditions apply
                    </NavLink>
                </div>
            </div>
            {/* HEAD SECTION */}

            {/* MID SECTION */}
            <div className="container-fluid mid-row py-4">
                <div className="row pt-5 pb-3">
                    <h2 className="text-center fw-bold lh-lg blackText">Introducing Premium Mini</h2>
                    <p className="text-center fw-bold lh-lg blackText">
                        30 song downloads and unlimited ad-free music, on 1 mobile device.
                    </p>
                    <p className="fw-bold text-center">7 for 1 day</p>
                    <p className="fw-bold text-center">25 for 1 week</p>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-2 col-sm-12 py-3">
                        <button className="btn blackButton-mid-1 rounded-pill px-5 py-3">
                            GET MINI
                        </button>
                    </div>
                    <NavLink to="/" className="text-center blackText mt-3">
                        Terms and conditions apply
                    </NavLink>
                </div>
            </div>
            {/* MID SECTION */}
            {/* PREMIUM POWER SECTION */}
            <div className="container-fluid py-4">
                <div className="row pt-5">
                    <h2 className="text-center fw-bold mb-4">The power of Premium</h2>
                    <div className="col-md-3 text-center">
                        <img src={MUSIC1} alt="" width="200" />
                        <h4>No interruptions</h4>
                        <p>Play the music you love, ad-free.</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={MUSIC2} alt="" width="200" />
                        <h4>Offline playback</h4>
                        <p>Save your data by listening offline.</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={MUSIC3} alt="" width="200" />
                        <h4>Play everywhere</h4>
                        <p>Listen on your speakers, TV, and other favorite devices.</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={MUSIC4} alt="" width="200" />
                        <h4>Pay your way</h4>
                        <p>Prepay with Paytm, UPI, and more.</p>
                    </div>
                </div>
            </div>
            {/* PREMIUM POWER SECTION */}
            {/* Connect with music culture */}
            <div className="container-fluid mid-row-2 py-5">
                <div className="row pt-5">
                    <h2 className="text-center fw-bold mb-5">Connect with music culture</h2>
                    <div className="col-md-3 text-center">
                        <img src={STICKER1} alt="" width="200" />
                        <h4 className="lh-base mt-4 py-2">Bollywood Butter</h4>
                        <p className="lh-base">The finest quality Bollywood music handpicked for you.</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={STICKER2} alt="" width="200" />
                        <h4 className="lh-base mt-4 py-2">Punjabi 101</h4>
                        <p className="lh-base">The ultimate Punjabi hits.</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={STICKER3} alt="" width="200" />
                        <h4 className="lh-base mt-4 py-2">Tollywood Pearls</h4>
                        <p className="lh-base">The finest music from Telugu films.</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={STICKER4} alt="" width="200" />
                        <h4 className="lh-base mt-4 py-2">Hot Hits India</h4>
                        <p className="lh-base">50 hottest hits from across the globe.</p>
                    </div>
                </div>
            </div>
            {/* Connect with music culture */}
            <div className="container-fluid py-4 mt-5">
                <div className="row gy-4">
                    <h2 className="text-center fw-bold">Pick your Premium</h2>
                    <p className="text-center fw-bold">
                        Listen without limits on your phone, speaker, and other devices.
                    </p>
                    <div className="col-md-3">
                        <div className="card shadow-sm" style={{ height: "40rem" }}>
                            <div className="card-body lh-lg">
                                <h3 className="card-title">Mini</h3>
                                <p className="card-subtitle">One-time plans from ₹7 1 account</p>
                                <hr />
                                <p className="card-text">
                                    <FaCheck /> Listen to music ad-free on mobile
                                </p>
                                <p className="card-text">
                                    <FaCheck />
                                    Group Session
                                </p>
                                <p className="card-text">
                                    <FaCheck />
                                    Download 30 songs on 1 mobile device
                                </p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <button className="btn rounded-pill px-5 py-2 ml-4 blackButton-hero-1">
                                    VIEW PLANS
                                </button>
                                <br />
                                <br />

                                <NavLink to="/" className="text-center blackText">
                                    Terms and conditions apply
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow-sm" style={{ height: "40rem" }}>
                            <div className="card-body lh-lg">
                                <h3 className="card-title">Individual</h3>
                                <p className="card-subtitle">
                                    One-time plans from ₹129. Auto-renew plans temporarily unavailable. 1
                                    account
                                </p>
                                <hr />
                                <p className="card-text">
                                    <FaCheck /> Listen to music ad-free
                                </p>
                                <p className="card-text">
                                    <FaCheck />
                                    Group Session
                                </p>
                                <p className="card-text">
                                    <FaCheck />
                                    Download 10k songs/device on 5 devices
                                </p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <button className="btn rounded-pill px-5 py-2 ml-4 blackButton-hero-1">
                                    VIEW PLANS
                                </button>
                                <br />
                                <br />

                                <NavLink to="/" className="text-center blackText">
                                    Terms and conditions apply
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow-sm" style={{ height: "40rem" }}>
                            <div className="card-body lh-lg">
                                <h3 className="card-title">Duo</h3>
                                <p className="card-subtitle">
                                    One-time plans from ₹165. Auto-renew plans temporarily unavailable. 2
                                    accounts
                                </p>
                                <hr />
                                <p className="card-text">
                                    <FaCheck /> For couples who live together
                                </p>
                                <p className="card-text">
                                    <FaCheck />
                                    Listen to music ad-free
                                </p>
                                <p className="card-text">
                                    <FaCheck />
                                    Group Session
                                </p>
                                <p className="card-text">
                                    <FaCheck />
                                    Download 10k songs/device, on 5 devices per account
                                </p>
                                <br />
                                <br />
                                <button className="btn rounded-pill px-5 py-2 ml-4 mt-4 blackButton-hero-1">
                                    VIEW PLANS
                                </button>
                                <br />
                                <br />

                                <NavLink to="/" className="text-center blackText">
                                    Terms and conditions apply
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow-sm" style={{ height: "40rem" }}>
                            <div className="card-body lh-lg">
                                <h3 className="card-title">Family</h3>
                                <p className="card-subtitle">
                                    One-time plans from ₹199. Auto-renew plans temporarily unavailable. Up to
                                    6 accounts
                                </p>
                                <hr />
                                <p className="card-text">
                                    <FaCheck /> For family who live together
                                </p>
                                <p className="card-text">
                                    <FaCheck />
                                    For family who live together
                                </p>
                                <p className="card-text">
                                    <FaCheck />
                                    Listen to music ad-free
                                </p>
                                <p className="card-text">
                                    <FaCheck />
                                    Group Session
                                </p>
                                <p className="card-text">
                                    <FaCheck />
                                    Download 10k songs/device on 5 devices
                                </p>
                                <br />
                                <button className="btn rounded-pill px-5 py-2 ml-4 blackButton-hero-1">
                                    VIEW PLANS
                                </button>
                                <br />
                                <br />
                                <NavLink to="/" className="text-center blackText">
                                    Terms and conditions apply
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="row py-4 mt-5 shadow-sm rounded">
                        <div className="col-md-6 mx-auto  ">
                            <h2 className="text-center">
                                Listen without limits on your phone, speaker, and other devices.
                            </h2>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-outline-dark rounded-pill px-5 py-3">
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Connect with music culture */}

        </>
    );
};

export default Premium;
