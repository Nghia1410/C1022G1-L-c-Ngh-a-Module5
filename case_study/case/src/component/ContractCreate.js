import React from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

function ContractCreate() {
    return (
        <Formik
            initialValues={{
                facility: [],
                customer: [],
                dateStart: "",
                dateEnd: "",
                deposit: "",
                totalMoney: ""
            }}
            validationSchema={Yup.object({
                facility: Yup.string()
                    .required("Không được để trống"),
                customer: Yup.string()
                    .required("Không được để trống"),
                dateStart: Yup.date()
                    .required("Không được để trống"),
                dateEnd: Yup.date()
                    .required("Không được để trống"),
                deposit: Yup.number()
                    .required("Không được để trống"),
                totalMoney: Yup.number()
                    .required("Không được để trống")
            })}
            onSubmit={(values => {
                console.log(values);
            })}>

            <div>
                <div className='text-center'>
                    <h2 style={{ textAlign: "center", color: "red" }}>CREATE CONTRACT</h2>
                </div>

                <div className='d-flex justify-content-center mt-3'>
                    <form className="w-50 border border-2 border-success p-3 rounded ">
                        <div className="mt-3 form-group">
                            <label htmlFor="idContract">Mã hợp đồng: <span>*</span>   </label>
                            <div>
                                <Field type="text" id="idContract" className="form-control" name="idContract" />
                            </div>
                            <div>
                                <ErrorMessage name='idContract' component='span' className='form-err text-danger' />
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="startDay">Ngày bắt đầu: <span>*</span></label>
                            <div>
                                <Field type="date" id="startDay" className="form-control" name="startDay" />
                            </div>
                            <div>
                                <ErrorMessage name='startDay' component='span' className='form-err text-danger' />
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="dateEnd" > Ngày kết thúc:<span>*</span></label>
                            <div>
                                <Field type="date" id="dateEnd" className="form-control" name="dateEnd" />
                            </div>
                            <div>
                                <ErrorMessage name='dateEnd' component='span' className='form-err text-danger' />
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="money">Số tiền cọc trước: <span>*</span></label>
                            <div className="input-group">
                                <Field type="text" id="money" className="form-control" placeholder="Nhập số tiền cọc"
                                    name="money" />
                            </div>
                            <div>
                                <ErrorMessage name='money' component='span' className='form-err text-danger' />
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="totalMoney"> Tổng tiền thanh toán:<span>*</span> </label>
                            <div className="input-group">
                                <Field type="text" id="totalMoney" className="form-control"
                                    placeholder="Nhập số tiền cọc"
                                    name="totalMoney" />
                            </div>
                            <div>
                                <ErrorMessage name='totalMoney' component='span' className='form-err text-danger' />
                            </div>
                        </div>


                        <div className="mt-3 text-center">
                            <button
                                className="btn btn-info btn-outline-success btn-sm border border-2 border-success text-dark">
                                Save 
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Formik>
    )
}

export default ContractCreate;