import React, { useEffect, useState } from 'react';
import { Form, Field, Formik } from 'formik';
import * as bookService from '../service/bookService'
import { useNavigate, useParams } from "react-router";


function EditBook() {
    let param = useParams()

    let navigate = useNavigate();

    const [books, setBook] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            const res = await bookService.findById(param.id)
            setBook(res)
        }
        fetchApi()
    }, [])

    if (!books) {
        return null;
    }
    return (
        <Formik
            initialValues={{
                id: books?.id,
                title: books?.title,
                quantity: books?.quantity
            }}
            onSubmit={(values) => {
                const edit = async () => {
                    console.log(values);
                    await bookService.editBook(values)
                    navigate('/');
                };
                edit();
            }}
        >

            <Form>
                <Field type="hidden" name="id" />

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <Field type="text" name="title" id="title" />
                </div>

                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <Field type="text" name="quantity" id="quantity" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
        </Formik>
    );
}

export default EditBook;