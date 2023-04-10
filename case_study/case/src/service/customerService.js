import axios from "axios"

export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/customers')
        return result.data
    } catch (error) {
        console.log(error)
    }

}
export const customerType = async () => {
    try {
        const result = await axios.get(' http://localhost:8080/customerType')
        return result.data
    } catch (error) {
        console.log(error)
    }
}
export const createCustomer = async (values) => {
    try {
        await axios.post("http://localhost:8080/customers" ,{ ...values})
    } catch (error) {
        console.log(error)
    }

}