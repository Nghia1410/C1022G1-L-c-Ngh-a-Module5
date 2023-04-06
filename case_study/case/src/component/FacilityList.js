import { Component } from 'react'
import facilities from './Facility'
import { NavLink } from 'react-router-dom';
class FacilityList extends Component {
  render() {
    return (
      <>
        <center>
          <h1>Facility List</h1>
        </center>
        <NavLink to='/add'>
        <button className='btn btn-outline-secondary' style={{color:'blue'}}>Create Facility</button>
        </NavLink>
        
        <table
          id="facilityTable"
          className="table table-light table-striped table-bordered"
        >
        
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Area</th>
              <th>Cost</th>
              <th>Max people</th>
              <th>Standard</th>
              <th>Description</th>
              <th>Pool area</th>
              <th>Number of Floors</th>
              <th>Facility Free</th>
              <th>Rent type</th>
              <th>Facility type</th>
              <th classname="text-center">Edit</th>
              <th classname="text-center">Delete</th>
            </tr>

          </thead>

          <tbody align="center">
            {facilities.facility.map((facilityList, index) =>

              <tr key={index}>
                <td>{index + 1}</td>
                <td>{facilityList.name}</td>
                <td>{facilityList.area}</td>
                <td>{facilityList.cost}</td>
                <td>{facilityList.maxPeople}</td>
                <td>{facilityList.standardRoom}</td>
                <td>{facilityList.description}</td>
                <td>{facilityList.poolArea}</td>
                <td>{facilityList.numberOfFloors}</td>
                <td>{facilityList.facilityFree}</td>
                <td>{facilityList.rentType.name}</td>
                <td>{facilityList.facilityType.name}</td>
                <td><button style={{ color: "blue" }} className='btn btn-outline-secondary'>
                <NavLink to='/edit' style={{textDecoration:'none'}}>Edit</NavLink>
                  </button></td>
                <td><button style={{ color: "red" }} className='btn btn-outline-secondary'>Delete</button></td>
              </tr>
            )
            }
          </tbody>
        </table>

      </>
    )
  }
}
export default FacilityList;