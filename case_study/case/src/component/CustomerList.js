import { Component } from 'react'
import customers from './Customer'
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
              
               
                    <tbody align="center">
            {customers.customer.map((CustomerList, index) =>

              <tr key={index}>
                <td>{index + 1}</td>
                <td>{CustomerList.name}</td>
                <td>{CustomerList.gender}</td>
                <td>{CustomerList.age}</td>
                <td>{CustomerList.phoneNumber}</td>
                <td>{CustomerList.address}</td>
                <td>{CustomerList.customerType.name}</td>
                <td><button style={{ color: "blue" }}>Edit</button></td>
                <td><button style={{ color: "red" }}>Delete</button></td> 
              </tr>
            )
            }
          </tbody>
                </table>
            </>
        )
    }
}
export default CustomerList