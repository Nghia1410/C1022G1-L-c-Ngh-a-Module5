import { Component } from "react";

class Header extends Component {
    render() {
        return (
            <>
                <div id="header" className="fixed-top">
                    <ul id="nav">
                        <li>
                            <a href="">
                                <img src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png" alt="" height="40px" />
                            </a>
                        </li>
                        <li>
                            <a href="facility/facilityList.html">Dịch vụ</a>
                        </li>
                        <li>
                            <a href="">Đội ngũ</a>
                        </li>
                        <li>
                            <a href="customer/customerList.html">Khách hàng</a>
                        </li>
                        <li>
                            <a href="contract/contractList.html">Hợp đồng</a>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}

export default Header;