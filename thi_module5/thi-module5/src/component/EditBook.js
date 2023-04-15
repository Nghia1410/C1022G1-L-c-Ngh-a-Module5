// import React, { useEffect, useState } from 'react';
// import { Form, Field, Formik } from 'formik';
// import * as bookService  from '../service/bookService'
// import { useNavigate, useParams } from "react-router";


// function EditBook() {
//     let param = useParams()

//     let navigate = useNavigate();

//     const [books, setBook] = useState();

//     useEffect(() => {
//         const fetchApi = async () => {
//             const res = await bookService.findById(param.id)    
//             setBook(res)
//         }
//         fetchApi()
//     }, [])

//     if (!books) {
//         return null;
//     }
//     return (
//         <Formik
//             initialValues={{
//                 id: books?.id,
//                 idBook: books?.idBook,
//                 name: books?.name,
//                 type: books?.type,
//                 dayStart: books?.dayStart,
//                 countBook: books?.countBook
//             }}
//             onSubmit={(values) => {
//                 const edit = async () => {
//                     console.log(values);
//                     await bookService.editBook(values)
//                     navigate('/');
//                 };
//                 edit();
//             }}
//         >
//             <Form>
//                 <center>
//                     <h2 style={{ color: 'blue' }}>CHỈNH SỬA SÁCH</h2>
//                 </center>

//                 <div className="mb-3">
//                     <label htmlFor="idBook" className="form-label">Mã sách</label>
//                     <Field type="text" className="form-control" id="idBook"
//                         name='idBook'
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="name" className="form-label">Tên sách</label>
//                     <Field type="text" className="form-control" id="name"
//                         name='name'
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="type" className="form-label">Thể loại</label>
//                     <Field type="text" className="form-control" id="type"
//                         name='type'
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="dayStart" className="form-label">Ngày nhập sách</label>
//                     <Field type="date" className="form-control" id="dayStart"
//                         name='dayStart'
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="countBook" className="form-label">Số lượng</label>
//                     <Field type="text" className="form-control" id="countBook"
//                         name='countBook'
//                     />
//                 </div>
//                 <div style={{ textAlign: 'center' }}>
//                     <button type="submit" className="btn btn-primary">
//                         Gửi
//                     </button>
//                 </div>

//             </Form>
//         </Formik>
//     );
// }

// export default EditBook;