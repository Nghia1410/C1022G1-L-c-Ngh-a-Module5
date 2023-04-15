import { useState, useEffect } from "react"
import * as bookService from '../service/bookService'
import { NavLink } from "react-router-dom";

export function BookList() {
    const [books, setBook] = useState([]);
    const findAllBook = async () => {
        const book = await bookService.findAll()
        setBook(book.data)
    }
    useEffect(() => {
        findAllBook()
    }, [])
    return (
        <>
            <div>
                <center>
                    <h1 style={{color:'blue'}}>Hệ thống quản lý sách</h1>
                </center>
                <NavLink to='/add'>
                    <button>Create Book</button>
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
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((bookList, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{bookList.idBook}</td>
                                <td>{bookList.name}</td>
                                <td>{bookList.type}</td>
                                <td>{bookList.dayStart}</td>
                                <td>{bookList.countBook}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )

}
export default BookList;
