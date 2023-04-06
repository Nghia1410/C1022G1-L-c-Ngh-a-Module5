import React, { Component } from 'react';
function ContractCreate() {
    return (
        <>
            <div>
                <h2 style={{ textAlign: "center", color: "red" }}>CREATE CONTRACT</h2>
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
            </div>

        </>
    );
}

export default ContractCreate;