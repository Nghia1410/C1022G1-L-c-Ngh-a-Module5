import React, { Component } from 'react';


class Home extends Component {
 
    render() { 
        return (
            <>
            <div
                className="row"
                style={{ background: "#046056", height: 60, textAlign: "center" }}
            >
            </div>
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ height: 800 }}>
                        <img
                            src="https://fantasea.vn/wp-content/uploads/2017/10/Furama-%C4%90%C3%A0-N%E1%BA%B5ng-Resort.jpg"
                            className="d-block w-100 h-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item" style={{ height: 800 }}>
                        <img
                            src="https://danangtransfer.vn/wp-content/uploads/2019/02/coco-ocean-resort-banner-2.jpg"
                            className="d-block w-100 h-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item" style={{ height: 800 }}>
                        <img
                            src="https://onetouchmedia.vn/wp-content/uploads/2019/10/N.NT-31.jpg"
                            className="d-block w-100 h-100"
                            alt="..."
                        />
                    </div>
                    <div style={{ color: "white" }} className="card-img-overlay">
                        <div className="row mt-5">
                            <div className="col-lg-6 mt-5 d-flex">
                                <div className="col-lg-6">
                                    <span style={{ fontSize: 50, fontFamily: '"Times New Roman"' }}>
                                        Furama Resort
                                    </span>
                                    <h5 style={{ fontFamily: '"Times New Roman"' }}>
                                        A CULINARY RESORT ON ONE OF THE SIX MOST LUXURIOUS BEACHES IN
                                        THE WORLD
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
        );
    }
}
 
export default Home ;