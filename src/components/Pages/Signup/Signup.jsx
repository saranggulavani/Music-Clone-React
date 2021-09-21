import React from 'react'
import "./Signup.css"
import { NavLink } from "react-router-dom"
import LOGO from "../../../images/logo.png"

const Signup = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row py-5">
                    <div className="col-md-12 d-flex justify-content-center">
                        <img src={LOGO} className="img-fluid" alt="" width="150" />
                    </div>
                    <div className="col-md-12">
                        <h3 className="text-center fw-bold py-3 mt-3">Sign up for free to start listening.</h3>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center">
                        <button className="btn btn-primary rounded-pill fw-bold px-5 py-3">Sign up with Facebook</button>
                    </div>
                    <form className="mt-4">
                        <div className="mb-3">
                            <div className="col-md-6 mx-auto">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">What's your email?</label>
                                <input type="email" className="form-control" placeholder="Enter your Email" />
                                <NavLink to="/" className="form-text text-success">Use phone number instead.</NavLink>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="col-md-6 mx-auto">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Confirm your email</label>
                                <input type="email" className="form-control" placeholder="Enter your Email again" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="col-md-6 mx-auto">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Create a password</label>
                                <input type="email" className="form-control" placeholder="Create a password" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="col-md-6 mx-auto">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">What should we call you?</label>
                                <input type="email" className="form-control" placeholder="Enter a profile name" />
                                <div className="form-text">This appears on your profile.</div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="col-md-6 mx-auto">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">What's your gender ?</label>
                                <br />
                                <input class="form-check-input" type="radio" name="gridRadios" value="option1" />
                                <label class="form-check-label px-3" for="gridRadios1">
                                    Male
                                </label>
                                <input class="form-check-input" type="radio" name="gridRadios" value="option1" />
                                <label class="form-check-label px-3" for="gridRadios1">
                                    Female
                                </label>
                                <input class="form-check-input" type="radio" name="gridRadios" value="option1" />
                                <label class="form-check-label px-3" for="gridRadios1">
                                    Non-Binary
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="col-md-6 mx-auto pt-3">
                                <input class="form-check-input" type="checkbox" />
                                <label class="form-check-label px-3" for="gridCheck1">
                                    I would prefer not to receive marketing messages from Spotify
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="col-md-6 mx-auto pt-3">
                                <input class="form-check-input" type="checkbox" />
                                <label class="form-check-label px-3" for="gridCheck1">
                                    Share my registration data with Spotify's content providers for marketing purposes.
                                </label>
                            </div>
                        </div>
                        <div className="col-md-12 d-flex justify-content-center">
                            <button className="btn fw-bold mt-5 rounded-pill px-5 py-3 signupButton">Sign up</button>
                        </div>
                        <div className="col-md-12 d-flex justify-content-center mt-3">
                            <p>Have an account? <NavLink to="/login" className="text-success">Log in.</NavLink> </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup
