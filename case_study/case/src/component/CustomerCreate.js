import React, { Component } from 'react';
function CustomerCreate() {
    return (
        <>
            <center>
                <h1>Thêm mới khách hàng</h1>
            </center>
            <form>
                <label htmlfor="name">Tên: <span>*</span></label>
                <input type="text" id="name" name="name" required="" />
                <label htmlfor="dateOfBirth">Ngày Sinh: <span>*</span></label>
                <br />
                <input type="date" id="dateOfBirth" name="dateOfBirth" required="" />
                <br />
                <label>Giới tính: <span>*</span></label>
                <div classname="d-flex">
                    <label classname="d-block me-4">
                        <input type="radio" defaultValue={1} name="gender" defaultChecked="" />{" "}
                        Nam
                    </label>
                    <label>
                        <input type="radio" defaultValue={0} name="gender" /> Nữ
                    </label>
                </div>
                <label htmlfor="idCard">CMND: <span>*</span></label>
                <input type="text" id="idCard" name="idCard" required="" />
                <label htmlfor="phoneNumber">Số điện thoại: <span>*</span></label>
                <input type="text" id="phoneNumber" name="phoneNumber" required="" />
                <label htmlfor="Email">Email: <span>*</span></label>
                <input type="email" id="Email" name="Email" required="" />
                <label htmlfor="address">Địa chỉ: <span>*</span></label>
                <input type="text" id="address" name="address" required="" />
                <label htmlfor="customerType">Loại khách hàng: <span>*</span></label>
                <div>
                    <select id="customerType" classname="form-control" name="customerType">
                        <option></option>
                    </select>
                    <span></span>
                </div>
                <input type="submit" defaultvalue="Gửi" />
            </form>
        </>

    );
}

export default CustomerCreate;