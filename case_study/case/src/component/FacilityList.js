import { Component } from 'react'
import facilities from './Facility'
class FacilityList extends Component {
  render() {
    return (
      <>
        <div classname="p-3">
          <h2 classname="text-center fw-bold">FACILITY LIST</h2>
          <p classname="text-center mt-3">
            <a href="/">
              <i classname="fa-solid fa-house-chimney h5 mx-1" /> Back to HOME
            </a>
          </p>
        </div>
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
                <td><button style={{ color: "blue" }}>Edit</button></td>
                <td><button style={{ color: "red" }}>Delete</button></td>
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