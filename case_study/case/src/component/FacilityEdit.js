import { Component } from 'react'
class FacilityEdit extends Component {
    render() {
        return (
            <>
                <div classname="p-3">
                    <h2 classname="text-center fw-bold">FACILITY EDIT</h2>
                    <p classname="text-center mt-3">
                        <a href="/">
                            <i classname="fa-solid fa-house-chimney h5 mx-1" /> Back to HOME
                        </a>
                    </p>
                    <nav classname="navbar navbar-expand-lg py-0 my-0">
                        <div classname="container-fluid">
                            <a href="/case/src/prototype/facility/facilityCreate.html">
                                <button className="btn btn-success btn-outline-secondary btn-sm">
                                    <span classname="fa-solid fa-house-medical text-light h5 my-auto me-1" />
                                    <span classname="text-light"> EDIT Facility</span>
                                </button>
                            </a>
                            <form classname="d-flex my-2" role="search" action="/facility/list">
                                <input
                                    classname="form-control me-2"
                                    type="text"
                                    placeholder="Input search name"
                                    aria-label="Search"
                                    name="nameSearch"
                                    style={{ width: "210%" }}
                                />
                                <input
                                    classname="form-control me-2"
                                    type="text"
                                    placeholder="Input search FacilityType"
                                    aria-label="Search"
                                    name="facilityTypeSearch"
                                    style={{ width: "210%" }}
                                />
                                <button
                                    classname="btn btn-outline-success"
                                    type="submit"
                                    name="action"
                                    value="search"
                                >
                                    <i classname="fa-solid fa-magnifying-glass" />
                                </button>
                            </form>
                        </div>
                    </nav>
                </div>
                <form>
                    <label htmlFor="name">Loại dịch vụ</label>
                    <input type="text" id="name" name="name" required="" />
                    <label htmlFor="area">Diện tích</label>
                    <input type="text" id="area" name="area" required="" />
                    <label htmlFor="cost">Giá tiền:</label>
                    <input type="text" id="cost" name="cost" required="" />
                    <label htmlFor="maxPerson">Số người tối đa:</label>
                    <input type="text" id="maxPerson" name="maxPerson" required="" />
                    <label htmlFor="standardRoom">Tiêu chuẩn phòng:</label>
                    <input type="text" id="standardRoom" name="standardRoom" required="" />
                    <label htmlFor="describe">Mô tả:</label>
                    <input type="text" id="describe" name="describe" required="" />
                    <label htmlFor="poolArea">Diện tích hồ bơi:</label>
                    <input type="text" id="poolArea" name="poolArea" required="" />
                    <label htmlFor="numberOfFloor">Số tầng:</label>
                    <input type="text" id="numberOfFloor" name="numberOfFloor" required="" />
                    <label htmlFor="facilityFree">Dịch vụ miễn phí:</label>
                    <input type="text" id="facilityFree" name="facilityFree" required="" />
                    <input type="submit" defaultValue="Gửi" />
                </form>

            </>
        )
    }
}
export default FacilityEdit;