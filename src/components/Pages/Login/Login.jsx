import React from 'react'
import "./Login.css"
import { NavLink } from 'react-router-dom'
import LOGO from "../../../images/logo.png"

const Login = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center py-5">
                        <img src={LOGO} alt="" className="img-fluid" width="200" />
                    </div>
                    <hr className="mt-2" />
                    <div className="col-md-12">
                        <p className="text-center fw-bold">To continue, log in to Spotify.</p>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center py-sm-0">
                        <button className="btn btn-primary rounded-pill socialButton facebookButton">Sign up with Facebook</button>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center py-2">
                        <button className="btn btn-dark rounded-pill socialButton appleButton">CONTINUE WITH APPLE</button>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center py-2">
                        <button className="btn btn-light rounded-pill socialButton googleButton">CONTINUE WITH GOOGLE</button>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center py-2">
                        <button className="btn btn-light rounded-pill socialButton googleButton">CONTINUE WITH PHONE</button>
                    </div>
                    <form className="mt-4 py-5">
                        <div className="mb-3">
                            <div className="col-md-4 mx-auto">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">What's your email?</label>
                                <input type="email" className="form-control" placeholder="Enter your Email" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="col-md-4 mx-auto">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">What's your email?</label>
                                <input type="email" className="form-control" placeholder="Enter your Email" />
                                <NavLink to="/" className="form-text pt-2">Forgot your password?</NavLink>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="col-md-4 mx-auto">
                                <input class="form-check-input mt-2" type="checkbox" name="gridRadios" value="option1" />
                                <label class="form-check-label px-3" for="gridRadios1">
                                    Remember me
                                </label>
                                <button className="btn fw-bold text-white rounded-pill loginButton px-5 mx-5">LOG IN</button>
                            </div>
                        </div>
                    </form>
                    <hr />
                    <div className="row py-5">
                        <div className="col-md-12 py-3">
                            <h3 className="text-center fw-bold">Don't have an account?</h3>
                        </div>
                        <div className="col-md-12 d-flex justify-content-center">
                            <NavLink to="/signup" className="btn rounded-pill socialButton googleButton">SIGN UP FOR SPOTIFY</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
