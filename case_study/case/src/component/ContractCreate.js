import React, { Component } from 'react';
function ContractCreate() {
    return (
        <>
            {/* <div className="">
                <h2 style={{ textAlign: "center", color: "red" }}>Thêm mới hợp đồng</h2>
                <form>
                    <label htmlFor="idContract">Mã hợp đồng: <span>*</span></label>
                    <input type="text" id="idContract" name="idContract" required="" />

                    <label htmlFor="startDay">Ngày bắt đầu: <span>*</span></label>
                    <br />
                    <input type="date" id="startDay" name="startDay" required="" />
                    <br />

                    <label htmlFor="endDay">Ngày kết thúc: <span>*</span></label>
                    <br />
                    <input type="date" id="endDay" name="endDay" required="" />
                    <br />

                    <label htmlFor="money">Số tiền cọc trước: <span>*</span></label>
                    <input type="text" id="money" name="money" required="" />

                    <label htmlFor="total">Tổng số tiền thanh toán: <span>*</span></label>
                    <input type="text" id="total" name="total" required="" />
                    <input type="submit" defaultValue="Gửi" />
                </form>
            </div> */}
            <form>
                <label htmlFor="name">Tên:</label>
                <input type="text" id="name" name="name" required="" />
                <label htmlFor="dateOfBirth">Ngày Sinh:</label>
                <input type="date" id="dateOfBirth" name="dateOfBirth" required="" />
                <label style={{ fontWeight: "bold" }}>Giới tính:</label>
                <div className="d-flex">
                    <label className="d-block me-4">
                        <input type="radio" value="1" name="gender" checked> Nam</input>
                    </label>
                    <label className="d-block">
                        <input type="radio" value="0" name="gender"> Nữ</input>
                    </label>
                </div>
                <label htmlFor="idCard">CMND:</label>
                <input type="text" id="idCard" name="idCard" required="" />
                <label htmlFor="phoneNumber">Số điện thoại:</label>
                <input type="text" id="phoneNumber" name="phoneNumber" required="" />
                <label htmlFor="Email">Email:</label>
                <input type="email" id="Email" name="Email" required="" />
                <label htmlFor="address">Địa chỉ:</label>
                <input type="text" id="address" name="address" required="" />
                <label htmlFor="customerType" style={{ fontWeight: "bold" }}>
                    Loại khách hàng:
                </label>
                <div className="input-group">
                    <select id="customerType" className="form-control" name="customerType">
                        <option />
                    </select>
                    <span className="input-group-text" />
                </div>
                <input type="submit" defaultValue="Gửi" />
            </form>

        </>
    );
}

export default ContractCreate;