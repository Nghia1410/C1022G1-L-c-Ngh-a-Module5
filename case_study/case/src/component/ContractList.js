import React, { Component } from 'react';
import contracts from './Contract';
import { NavLink } from 'react-router-dom';
function ContractList() {
    return (
        <>
            <div>
                <center>
                    <h1>CONTRACT LIST</h1>
                </center>
                <NavLink to='/addContract'>
                    <button className='btn btn-outline-secondary' style={{ color: 'blue' }}>Create Contract</button>
                </NavLink>
                <table className="table table-light">
                    <thead>
                        <tr>
                            <th>Stt</th>
                            <th>Facility</th>
                            <th>Customer</th>
                            <th>Date Start</th>
                            <th>Date End</th>
                            <th>Deposit</th>
                            <th>Total Money</th>
                            <th>Accompanied Facility</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contracts.contract.map((ContractList, index) =>

                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{ContractList.facility.name}</td>
                                <td>{ContractList.customer.name}</td>
                                <td>{ContractList.dateStart}</td>
                                <td>{ContractList.dateEnd}</td>
                                <td>{ContractList.deposit}</td>
                                <td>{ContractList.totalMoney}</td>
                                <td>{ContractList.accompaniedFacility}</td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default ContractList;