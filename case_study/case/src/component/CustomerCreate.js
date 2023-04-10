import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as customerService from '../service/customerService'
import { useNavigate } from 'react-router-dom';

function CustomerCreate() {
    let navigate = useNavigate();
    const [customerTypeList, setCustomers] = useState([]);

    const customerType = async () => {
        const result = await customerService.customerType();
        setCustomers(result)
    }

    useEffect(() => {
        customerType();
    }, [])

    return (
        <>
            <Formik
                initialValues={{ name: '', gender: '', age: '', phoneNumber: '', address: '', customerTypeId: 1 }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Không được để trống').min(2, 'độ dài ký tự phải từ 2 trở lên'),
                    gender: Yup.string()
                        .required('Không được để trống'),
                    age: Yup.number()
                        .required('Không được để trống'),
                    phoneNumber: Yup.string()
                        .required('Không được để trống').min(10, 'số điện thoại phải dài ít nhất 10 số và nhiều nhất 12 số')
                        .max(12, 'số điện thoại phải dài ít nhất 10 số và nhiều nhất 12 số'),
                    address: Yup.string()
                        .required('Không được để trống')

                })}
                onSubmit={(values) => {
                    console.log(values)
                    const create = async () => {
                        await customerService.createCustomer(values);
                        navigate('/customer')
                    };
                    create();
                }
                }
            >

                <Form>
                    <h1 className='mb'>Create Customer</h1>
                    <div className="mb-3">
                        <label htmlFor="name">Name: <span>*</span></label>
                        <Field type="text" className="form-control" id="name"
                            name='name'
                        />
                        <ErrorMessage name='name' component='span' className='form-err' />


                    </div>
                    <div className="mt-3 form-group">
                        <label style={{ fontWeight: "bold" }}>
                            Giới tính:<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="d-flex">
                            <label className="d-block me-4">
                                <Field type="radio" name="gender" value="Nam" />Nam
                            </label>
                            <label className="d-block">
                                <Field type="radio" name="gender" value="Nữ" /> Nữ
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age">Age: <span>*</span></label>

                        <Field type="text" className="form-control" id="age"
                            name='age'
                        />
                        <ErrorMessage name='age' component='span' className='form-err' />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="phoneNumber"> Phone Number  <span>*</span></label>

                        <Field type="text" className="form-control" id="phoneNumber"
                            name='phoneNumber'
                        />
                        <ErrorMessage name='phoneNumber' component='span' className='form-err' />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="address"> Address  <span>*</span></label>

                        <Field type="text" className="form-control" id="address"
                            name='address'
                        />
                        <ErrorMessage name='address' component='span' className='form-err' />

                    </div>
                    <div>
                        <label htmlFor="customerType">Loại khách hàng: <span>*</span></label>
                        <Field as='select' name='customerTypeId' >
                            {
                                customerTypeList.map((customerType) => (
                                    <option key={customerType.id} value={customerType.id}>
                                        {customerType.name} </option>
                                )
                                )
                            }
                        </Field>
                    </div>
                    <div>
                        <button type='submit' className='btn btn-primary'>Submit</button></div>
                </Form>
            </Formik>
        </>

    );
}

export default CustomerCreate;