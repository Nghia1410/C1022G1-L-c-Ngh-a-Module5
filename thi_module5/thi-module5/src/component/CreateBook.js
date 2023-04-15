import { Field, Form, Formik } from "formik"
import { useNavigate } from "react-router-dom"
import * as bookService from "../service/bookService"


export default function CreateBook() {
    const navigate = useNavigate()
    return (
        <>
            <Formik initialValues={{
                idBook:"",
                name: "",
                type: "",
                dayStart:"",
                countBook:""
                

            }}
                onSubmit={(values) => {
                    const create = async () => {
                        await bookService.createBook(values)
                        navigate('/')
                    };
                    create();
                }}
            >
                {
                    <Form>
                        <center>
                            <h2 style={{color:'blue'}}>THÊM MỚI SÁCH</h2>
                        </center>
                          
                        <div className="mb-3">
                            <label htmlFor="idBook" className="form-label">Mã sách</label>
                            <Field type="text" className="form-control" id="idBook"
                                name='idBook'
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Tên sách</label>
                            <Field type="text" className="form-control" id="name"
                                name='name'
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="type" className="form-label">Thể loại</label>
                            <Field type="text" className="form-control" id="type"
                                name='type'
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dayStart" className="form-label">Ngày nhập sách</label>
                            <Field type="date" className="form-control" id="dayStart"
                                name='dayStart'
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="countBook" className="form-label">Số lượng</label>
                            <Field type="text" className="form-control" id="countBook"
                                name='countBook'
                            />
                        </div>
                        <div style={{textAlign:'center'}}>
                        <button type="submit" className="btn btn-primary">
                            Gửi
                        </button>
                        </div>

                    </Form>
                }
            </Formik>
        </>
    )
}