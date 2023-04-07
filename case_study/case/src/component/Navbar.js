import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class NavBar extends Component {
    render() {
        return (
            <div
                className="row"
                style={{ background: "#046056", height: 60, textAlign: "center" }}
            >
                <nav className="navbar navbar-expand-lg" style={{ background: "#046056" }}>
                    <div
                        className="collapse navbar-collapse container-fluid"
                        id="navbarNavAltMarkup"
                    >
                        <div className="col-lg-2" />
                        <div className="navbar-nav col-lg-8">
                            <div>

                                <NavLink to='/'>
                                    <button type="button" className="btn btn-close-white">HOME</button>
                                </NavLink>

                            </div>
                            <div style={{ marginLeft: 30 }}>
                                <NavLink to='/customer'>
                                <button type="button" className="btn btn-close-white">CUSTOMER</button>
                                </NavLink>
                               
                                  
                                
                            </div>
                            <div style={{ marginLeft: 30 }}>

                                <NavLink to='/facility'>
                                    <button type="button" className="btn btn-close-white"> FACILITY</button>
                                </NavLink>

                            </div>
                            <div style={{ marginLeft: 30 }}>
                                <NavLink to='/contract'>
                                    <button type="button" className="btn btn-close-white">CONTRACT </button>
                                </NavLink>
                            </div>
                        </div>
                        <input placeholder="search" ></input>
                        <button className="btn btn-outline-light">Search</button>
                    </div>
                </nav>
            </div>

        );
    }
}

export default NavBar;
