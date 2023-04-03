import { Component } from 'react'
class CustomerList extends Component {
    render() {
        return (
            <>
                <div className="row mx-0" style="margin-top: 96px;">
                    <img className="img-fluid px-0" style="height: 400px;"
                        src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png"
                        alt="" />
                </div>
                <div>
                    <h2 className="text-center fw-bold pt-4">Danh Sách Tất Cả Các Khách Hàng</h2>
                </div>
                <div>
                    <button className="ms-5 btn btn-dark">Thêm Khách Hàng Mới</button>
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên khách hàng</th>
                            <th>Giới Tính</th>
                            <th>Tuổi</th>
                            <th>Số điện thoại</th>
                            <th>Địa chỉ</th>
                            <th>Loại khách hàng</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>1</th>
                            <th>NGhĩa </th>
                            <th>Nam</th>
                            <th>18</th>
                            <th>0905407023</th>
                            <th>44 Trần Bình Trọng</th>
                            <th>Diamond</th>
                            <th>
                                <button type="button" onclick="deleteId('${customer.id}','${customer.customerName}')"
                                    class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal1">Xóa</button>
                            </th>
                            <th>
                                <button type="button" onclick="editIdCustomer('${customer.id}')"
                                    class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">Chỉnh sửa</button>
                            </th>
                        </tr>
                    </thead>
                </table>
            </>
        )
    }
}
export default CustomerList