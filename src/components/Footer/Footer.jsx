import React from "react";
import "./Footer.css";
import LOGO from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook, FaGlobeAsia } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="container-fluid dark-background py-5">
                <div className="row">
                    <div className="col-md-2 px-3">
                        <img src={LOGO} className="img-fluid" alt="" width="130" />
                    </div>
                    <div className="col-md-2 ">
                        <ul className="list-unstyled lh-lg">
                            <li>
                                <NavLink to="/" className="text-decoration-none text-muted">
                                    COMPANY
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="text-decoration-none text-white greenHover">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="text-decoration-none text-white greenHover">
                                    Jobs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="text-decoration-none text-white greenHover">
                                    For the Record
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul className="list-unstyled lh-lg">
                            <li>
                                <NavLink to="/" className="text-decoration-none text-muted">
                                    COMMUNITIES
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="text-decoration-none text-white greenHover">
                                    For Artists
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="text-decoration-none text-white greenHover">
                                    Developers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="text-decoration-none text-white greenHover">
                                    Advertising
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="text-decoration-none text-white greenHover">
                                    Investors
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="text-decoration-none text-white greenHover">
                                    Vendors
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul className="list-unstyled lh-lg ">
                            <li>
                                <NavLink to="/" className="text-decoration-none text-muted">
                                    USEFUL LINKS
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="text-decoration-none text-white greenHover">
                                    Support
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="text-decoration-none text-white greenHover">
                                    Web Player
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="text-decoration-none text-white greenHover">
                                    Free Mobile App
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-1">
                        <FaInstagram className="greenHover display-5" />
                    </div>
                    <div className="col-md-1">
                        <FaTwitter className="greenHover display-5" />
                    </div>
                    <div className="col-md-1">
                        <FaFacebook className="greenHover display-5" />
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-md-9 pt-4">
                        <nav className="nav mt-5">
                            <NavLink to="/" className="nav-link text-muted greenHover">
                                <small>Legal</small>
                            </NavLink>
                            <NavLink to="/" className="nav-link text-muted greenHover ">
                                <small>Privacy Center</small>
                            </NavLink>
                            <NavLink to="/" className="nav-link text-muted greenHover ">
                                <small>Privacy Policy</small>
                            </NavLink>
                            <NavLink to="/" className="nav-link text-muted greenHover ">
                                <small>Cookies</small>
                            </NavLink>
                            <NavLink to="/" className="nav-link text-muted greenHover ">
                                <small> About Ads</small>
                            </NavLink>
                        </nav>
                    </div>
                    <div className="col-md-3 pt-5">
                        <NavLink className="text-decoration-none mt-5 " to="/">
                            <small className="text-center text-muted greenHover">
                                <FaGlobeAsia className="greenHover" /> India
                            </small>
                        </NavLink>
                        <p >
                            <small className="text-right text-muted">© 2021 Spotify AB</small>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
