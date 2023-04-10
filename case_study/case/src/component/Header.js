import { Component } from "react";
import React from "react";

class Header extends Component {
    render() {
        return (
          <header>
          <div className="container">
            <div className="row" style={{ backgroundColor: "white", padding: 20 }}>
              <div className="col-lg-3">
                <img
                  src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png"
                  style={{ width: 100, marginLeft: 70 }}
                />
              </div>
              <div className="col-lg-9 pt-5">
                <div className="row" style={{ fontFamily: '"Times New Roman"' }}>
                  <div className="col-lg-4">
                    <span style={{ textAlign: "center", color: "#1e2125" }}>
                      <i className="fa-solid fa-location-dot" />
                      103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son
                      District, Danang City, Vietnam
                    </span>
                    <p>7,0 km from Danang Airport</p>
                  </div>
                  <div className="col-lg-5">
                    <p style={{ textAlign: "center", color: "#1e2125" }}>
                      <i className="fa-solid fa-phone" /> 84-236-3847 333/888
                      <br />
                      <i className="fa fa-phone" /> reservation@furamavietnam.com
                    </p>
                  </div>
                  <div className="col-lg-3">
                    <p style={{ color: "#1e2125" }}>
                      <i className="fa-solid fa-user" />
                      Lê Đức Nghĩa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        );
    }
}
export default Header;