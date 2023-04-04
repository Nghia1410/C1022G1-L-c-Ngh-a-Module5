import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RotatingLines } from 'react-loader-spinner';

function Contact() {
    return (
        <>
            <Formik
                initialValues={{ userName: '', email: '', phone: '', message: '' }}
                validationSchema={Yup.object({
                    userName: Yup.string()
                        .required('Không được để trống').min(2, 'độ dài ký tự phải từ 2 trở lên'),
                    email: Yup.string().email('email phải đúng định dạng.Vd:leducnghia1410@gmail.com')
                        .required('Không được để trống'),
                    phone: Yup.number()
                        .required('Không được để trống'),
                    message: Yup.string()
                        .required('Không được để trống'),

                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(values)
                        setSubmitting(false)
                        toast('Liên hệ thành công')
                    }, 500)
                }}
            >
                {({ isSubmitting }) => (

                    <Form>
                        <h1 className='mb'>Form Contact</h1>
                        <div className="mb-3">
                            <label htmlFor="nameContact" className="form-label">User Name </label>
                            <Field type="text" className="form-control" id="exampleInputEmail1"
                                name='userName'
                            />
                            <ErrorMessage name='userName' component='span' className='form-err' />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label"> Email</label>

                            <Field type="email" className="form-control" id="email"
                                name='email'
                            />
                            <ErrorMessage name='email' component='span' className='form-err' />

                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label"> Phone</label>

                            <Field type="text" className="form-control" id="phone"
                                name='phone'
                            />
                            <ErrorMessage name='phone' component='span' className='form-err' />

                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label"> Message</label>

                            <Field type="text" className="form-control" id="message"
                                name='message'
                            />
                            <ErrorMessage name='message' component='span' className='form-err' />

                        </div>
                        {isSubmitting ?
                            <RotatingLines
                                strokeColor="grey"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="96"
                                visible={true}
                            />
                            :
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        }

                    </Form>

                )}
            </Formik>
        </>
    );
}
export default Contact;