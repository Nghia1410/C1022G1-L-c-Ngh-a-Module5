import React, { Component } from 'react';
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
                            <button type="button" className="btn btn-close-white">
                                <a href="/case/src/prototype/home.html" />
                                HOME
                            </button>
                        </div>
                        <div style={{ marginLeft: 30 }}>
                            <button type="button" className="btn btn-close-white">
                                <a
                                    style={{ textDecoration: "none" }}
                                    href="/case/src/prototype/customer/customer.html"
                                >
                                    CUSTOMER
                                </a>
                            </button>
                        </div>
                        <div style={{ marginLeft: 30 }}>
                            <button type="button" className="btn btn-close-white">
                                <a style={{ textDecoration: "none" }} href="/facility">
                                    FACILITY
                                </a>
                            </button>
                        </div>
                        <div style={{ marginLeft: 30 }}>
                            <button type="button" className="btn btn-close-white">
                                <a style={{ textDecoration: "none" }} href="/contract">
                                    CONTRACT
                                </a>
                            </button>
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
