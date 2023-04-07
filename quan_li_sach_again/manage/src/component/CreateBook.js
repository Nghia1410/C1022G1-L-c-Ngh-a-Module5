import { Field, Form, Formik } from "formik"
import { useNavigate } from "react-router-dom"
import { bookService } from "../service/bookService"


export default function CreateBook() {
    const navigate = useNavigate()
    return (
        <>
            <Formik initialValues={{
                title: "",
                quantity: "",

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
                        <h2>CREATE BOOK</h2>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <Field type="text" className="form-control" id="title"
                                name='title'
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="quantity" className="form-label">Quantity</label>
                            <Field type="text" className="form-control" id="quantity"
                                name='quantity'
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>

                    </Form>
                }
            </Formik>
        </>
    )
}