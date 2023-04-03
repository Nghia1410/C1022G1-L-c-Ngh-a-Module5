import { Component } from 'react'
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
    clclassnameass="table table-light table-striped table-bordered"
  >
   
    <thead>
    <table>
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
      </table>
    </thead>
  
    <tbody>
      <tr>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
    </tbody>
  </table>

            </>
        )
    }
}
export default FacilityList;