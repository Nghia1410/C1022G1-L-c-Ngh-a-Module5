import { useState, useEffect } from "react"
import * as bookService from '../service/bookService'
import { NavLink, useNavigate } from "react-router-dom";

function BookList() {
    const [books, setBook] = useState([]);
    const [type, setType] = useState([]);
    let navigate = new useNavigate();
    const findAllBook = async () => {
        const result = await bookService.findAll()
        setBook(result)
    }

    const findAllTypeBook = async () => {
        const result = await bookService.findAllTypeBook()
        setBook(result)
    }

    useEffect(() => {
        findAllBook();
        findAllTypeBook()
    }, [])
    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }
    const handleDelete = async (id) => {
        await bookService.deleteBook(id)
        findAllBook();
    }

    return (
        <>
            <div>
                <center>
                    <h1 style={{ color: 'blue' }}>Hệ thống quản lý sách</h1>
                </center>
                <NavLink to='/add'>
                    <button>Thêm mới sách</button>
                </NavLink>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Stt</th>
                            <th>Mã sách</th>
                            <th>Tên sách</th>
                            <th>Thể loại</th>
                            <th>Ngày nhập sách</th>
                            <th>Số lượng</th>
                            <th>Chỉnh sửa</th>
                            <th>Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books?.map((bookList, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{bookList.idBook}</td>
                                <td>{bookList.name}</td>
                                <td>{bookList.bookTypeDTO.bookTypeName}</td>
                                <td>{bookList.dayStart}</td>
                                <td>{bookList.quantity}</td>
                                <td>
                                    <button type="submit" onClick={() => handleEdit(bookList.id)} className="btn btn-primary">Chỉnh sửa</button>
                                </td>
                                <td>
                                    <button type="submit" onClick={() => handleDelete(bookList.id)} className="btn btn-danger">Xóa</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )

}
export default BookList;
