const customer = [
    {
        id: 1,
        name: 'Nghia',
        gender: 'Nam',
        age: '18',
        phoneNumber: '0905407023',
        address: '44/9 Tran Binh Trong',
        customerType: {
            id: 1,
            name: 'Diamond'
        }
    },
    {
        id: 2,
        name: 'Tai',
        gender: 'Nam',
        age: '20',
        phoneNumber: '0905407023',
        address: '24 Trung Nu Vuong',
        customerType: {
            id: 2,
            name: 'Gold'
        }
    },

]
const customerType = [
    {
        id: 1,
        name: 'Diamond'
    },
    {
        id: 2,
        name: 'Gold'
    },
    {
        id: 3,
        name: 'Silver'
    }
];
export default {
    customer,customerType
}