import axios from "axios";

export const findAll = async () => {
    try {
       const result= await axios.get("http://localhost:8080/book")
       return result.data
    } catch (error) {
        console.log(error)
    }
}

export const findAllTypeBook = async () => {
    try {
       const result= await axios.get("http://localhost:8080/bookType")
       return result.data
    } catch (error) {
        console.log(error)
    }
}
export const createBook = async (book) => {
    try {
        await axios.post(`http://localhost:8080/book`, { ...book })
        alert("Thêm sách thành công!")
    } catch (error) {
        console.log(error)

    }
}
export const editBook = async (book) => {
    try {
        await axios.put(`http://localhost:8080/book/${book.id}`, { ...book })
        alert("Chỉnh sửa sách thành công!")
    } catch (error) {
        console.log(error)

    }
}
export const findById = async (id) => {
    try {
        const book = await axios.get(`http://localhost:8080/bookList/${id}`)
        return book.data
    } catch (error) {
        console.log(error);
        return error
    }
}
export const deleteBook = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/bookList/${id}`)
        alert("Xóa sách thành công!")
    } catch (error) {
        console.log(error);
        return error
    }
}
