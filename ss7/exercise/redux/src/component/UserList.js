import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser, deleteUser } from "../redux/actions/userList";

function UserList() {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch();
    console.log(users)

    useEffect(() => {
        console.log("Error");
        dispatch(getAllUser());
    }, []);

    return (
        <>
            <h2>User List</h2>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Website</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((userList, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{userList.name}</td>
                                <td>{userList.email}</td>
                                <td>{userList.website}</td>
                                <td>
                                    <button type='button' className='btn btn-danger'
                                        onClick={() => dispatch(deleteUser(users.id))}>DELETE
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default UserList;