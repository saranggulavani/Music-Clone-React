import React from "react";
import "./Support.css";
// import { NavLink } from "react-router-dom";

const Support = () => {
    return (
        <>
            <div>
                {/* HEAD SECTION */}
                <div className="container-fluid support-head py-4">
                    <div className="row py-5">
                        <div className="col-md-10 mx-auto">
                            <h2 className="text-center text-white fw-bold lh-lg blackText">
                                How can we help you?
                            </h2>
                        </div>
                        <div className="col-md-6 mx-auto">
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-md-4 text-center text-white py-3">
                            <p className="">PREMIUM FAMILY & KIDS</p>
                            <h5>Start or join Family plan</h5>
                        </div>
                        <div className="col-md-4 text-center text-white">
                            <p className="">LOGGING IN</p>
                            <h5>Can't reset password</h5>
                        </div>
                        <div className="col-md-4 text-center text-white">
                            <p className="">ACCOUNT SETTINGS</p>
                            <h5>Country or region settings</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* HEAD SECTION */}

            {/* HELP SECTION */}
            <div className="container-fluid d-flex justify-content-center py-4 support-help">
                <div className="row py-4">
                    <div className="col-md-4 flex-column py-3 px-5">
                        <h4 className="lh-lg">Account Help</h4>
                        <div className="text-success fw-bold">
                            <p>Logging in</p>
                            <p>Profile Help</p>
                            <p>Account Settings</p>
                            <p>Security</p>
                        </div>
                    </div>
                    <div className="col-md-4 py-3 px-5">
                        <h4 className="lh-lg">Payment Help</h4>
                        <div className="text-success fw-bold">
                            <p>Manage Payments</p>
                            <p>Payment Methods</p>
                            <p>Charge Help</p>
                        </div>
                    </div>
                    <div className="col-md-4 py-3 px-5">
                        <h4 className="lh-lg">Plan Help</h4>
                        <div className="text-success fw-bold">
                            <p>Available Plans</p>
                            <p>Plan Settings</p>
                            <p>Premium Family & Kids</p>
                            <p>Premium Student</p>
                            <p>Premium Duo</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid d-flex justify-content-center support-help pb-5">
                <div className="row">
                    <div className="col-md-4 flex-column px-5">
                        <h4 className="lh-lg">App Help</h4>
                        <div className="text-success fw-bold">
                            <p>Getting Started</p>
                            <p>App settings</p>
                            <p>Troubleshooting</p>
                            <p>Playlists</p>
                            <p>Features</p>
                            <p>Social Features</p>
                            <p>Voice assistants</p>
                        </div>
                    </div>
                    <div className="col-md-4  px-5">
                        <h4 className="lh-lg">Device Help</h4>
                        <div className="text-success fw-bold">
                            <p>Speakers</p>
                            <p>Smart watches</p>
                            <p>TVs</p>
                            <p>Gaming</p>
                            <p>Cars</p>
                        </div>
                    </div>
                    <div className="col-md-4  px-5">
                        <h4 className="lh-lg">Data & Privacy</h4>
                        <div className="text-success fw-bold">
                            <p>Listening Privacy</p>
                            <p>Data and privacy info</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* HELP SECTION */}
            <div className="container-fluid my-5">
                <div className="row pt-4">
                    <div className="col-md-10 mx-auto">
                        <h2 className="text-center fw-bold"> Visit the Community</h2>
                        <br />
                        <p className="text-center lead fw-bold">
                            Have questions? Find answers from our worldwide Community of expert fans!
                        </p>
                        <div className="col-md-2 py-3 mx-auto">
                            <button className="btn rounded-pill px-4 py-2 fw-bold findButton justify-content-center">
                                Find Answers
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Support;
