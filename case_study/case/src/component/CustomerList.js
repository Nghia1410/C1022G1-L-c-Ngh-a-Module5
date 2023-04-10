import { useEffect, useState } from 'react'
import * as customerService from '../service/customerService'
import { NavLink, useNavigate } from 'react-router-dom'

export function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [customerTypes, setCustomerType] = useState([]);


    const getCustomerType = async () => {
        const result = await customerService.customerType();
        setCustomerType(result)
    }
    let navigate = useNavigate();

    const getCustomer = async () => {
        const result = await customerService.findAll();
        setCustomers(result)
    }
    useEffect(() => {
        getCustomer();
        getCustomerType();
    }, [])


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
                    {
                        customers.map((customerList, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{customerList.name}</td>
                                <td>{customerList.gender}</td>
                                <td>{customerList.age}</td>
                                <td>{customerList.phoneNumber}</td>
                                <td>{customerList.address}</td>
                                <td>
                                    {customerTypes.filter(customerType => (
                                        customerType.id == customerList.customerTypeId
                                        ))[0]?.name}
                                </td>
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

export default CustomerList;