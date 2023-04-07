import axios from "axios"
export const findAll = async () => {
    try {
        const result = await axios.get("http://localhost:8080/bookList")
        console.log(result.data)
        return result.data
    } catch (error) {
        console.log(error)
    }
}
export const deleteBook = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/bookList/${id}`);
        alert("Delete Success!")
    } catch (error) {
        console.log(error)
    }

}
export const createBook = async (book) => {
    try {
        await axios.post(`http://localhost:8080/bookList`, { ...book })
        alert("Create Success!")
    } catch (error) {
        console.log(error)

    }
}
export const editBook = async (book) => {
    try {
        await axios.put(`http://localhost:8080/bookList/${book.id}`, { ...book })
        alert("Edit Success!")
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
export const bookService = { findAll, deleteBook, createBook, editBook, findById }