import { Component } from 'react'
import customers from './Customer'
import { NavLink } from 'react-router-dom'
class CustomerList extends Component {
    render() {
        return (
            <>
                <center>
                    <div><h1>Customer List</h1></div>
                </center>
                <NavLink to='/addCustomer'>
                    <button>Thêm Khách Hàng Mới</button>
                </NavLink>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên khách hàng</th>
                            <th>Giới Tính</th>
                            <th>Tuổi</th>
                            <th>Số điện thoại</th>
                            <th>Địa chỉ</th>
                            <th>Loại khách hàng</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>


                    <tbody>
                        {customers.customer.map((customerList, index) =>

                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{customerList.name}</td>
                                <td>{customerList.gender}</td>
                                <td>{customerList.age}</td>
                                <td>{customerList.phoneNumber}</td>
                                <td>{customerList.address}</td>
                                <td>{customerList.customerType.name}</td>
                                <td>
                                    <NavLink to='/editCustomer'>
                                        <button className='btn btn-primary' >Edit</button>
                                    </NavLink>
                                </td>
                                <td><button className='btn btn-danger' >Delete</button></td>
                            </tr>
                        )
                        }

                    </tbody>
                </table>
            </>
        )
    }
}
export default CustomerList;