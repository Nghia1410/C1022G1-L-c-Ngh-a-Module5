import axios from "axios"
export const findAll = async () => {
    try {
        return await axios.get(`http://localhost:8080/bookList`)
    } catch (error) {
        console.log(error)
    }
}
export const createBook = async (book) => {
    try {
        await axios.post(`http://localhost:8080/bookList`, {...book})
        alert("Thêm sách thành công!")
    } catch (error) {
        console.log(error)

    }
}
