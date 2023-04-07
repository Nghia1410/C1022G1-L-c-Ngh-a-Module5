import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { bookService } from "../service/bookService"
import { useNavigate } from "react-router-dom"



const BookList = () => {
    const [books, setBook] = useState([])
    let navigate = useNavigate();
    useEffect(() => {
        const bookList = async () => {
            const result = await bookService.findAll();
            setBook(result)
        }
        bookList();

    }, [])
    const handleDelete = async (id) => {
        await bookService.deleteBook(id)
        const bookList = async () => {
            const result = await bookService.findAll();
            setBook(result)
        }
        bookList();

    }
    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }
    return (
        <>
            <center>
                <h1>Book List</h1>
            </center>
            <NavLink to='/add'>
                <button>Create Book</button>
            </NavLink>
            <table className="table table-light">
                <thead>
                    <th>STT</th>
                    <th>TITLE</th>
                    <th>QUANTITY</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                </thead>
                <tbody>
                    {
                        books.map((book, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{book.title}</td>
                                <td>{book.quantity}</td>
                                <td>

                                    <button onClick={() => handleEdit(book.id)} className="btn btn-primary">Edit</button>

                                </td>
                                <td><button onClick={() => handleDelete(book.id)} className="btn btn-danger">Delete</button></td>
                            </tr>



                        )
                    }
                </tbody>
            </table>
        </>
    )
}
export default BookList