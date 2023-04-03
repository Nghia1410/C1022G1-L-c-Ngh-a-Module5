import { Component } from 'react'
class FacilityCreate extends Component {
    render() {
        return (
            <>
                <div className="p-3">

                    <h2 className="text-center fw-bold">FACILITY CREATE</h2>

                    <p className="text-center mt-3"><a href="/"><i className="fa-solid fa-house-chimney h5 mx-1"></i> Back to HOME</a></p>

                    <nav className="navbar navbar-expand-lg py-0 my-0">
                        <div className="container-fluid">

                            <a href="/case/src/prototype/facility/facilityCreate.html">
                                <button className="btn btn-success btn-outline-secondary btn-sm">
                                    <span className="fa-solid fa-house-medical text-light h5 my-auto me-1"></span>
                                    <span className="text-light"> Add new Facility</span>
                                </button>
                            </a>
                            <form className="d-flex my-2" role="search" action="/facility/list">
                                <input className="form-control me-2" type="text" placeholder="Input search name" th:value="${nameSearch}"
                                    aria-label="Search" name="nameSearch" style="width: 210%"></input>

                                <input className="form-control me-2" type="text" placeholder="Input search FacilityType" th:value="${facilityType}"
                                    aria-label="Search" name="facilityTypeSearch" style="width: 210%"></input>

                                <button className="btn btn-outline-success" type="submit" name="action" value="search">
                                    <i className="fa-solid fa-magnifying-glass"></i></button>
                            </form>

                        </div>
                    </nav>
                </div>
                <form>
                    <label for="name">Loại dịch vụ</label>
                    <input type="text" id="name" name="name" required></input>

                    <label for="area">Diện tích</label>
                    <input type="text" id="area" name="area" required></input>

                    <label for="cost">Giá tiền:</label>
                    <input type="text" id="cost" name="cost" required></input>

                    <label for="maxPerson">Số người tối đa:</label>
                    <input type="text" id="maxPerson" name="maxPerson" required></input>

                    <label for="standardRoom">Tiêu chuẩn phòng:</label>
                    <input type="text" id="standardRoom" name="standardRoom" required></input>

                    <label for="describe">Mô tả:</label>
                    <input type="text" id="describe" name="describe" required></input>

                    <label for="poolArea">Diện tích hồ bơi:</label>
                    <input type="text" id="poolArea" name="poolArea" required></input>

                    <label for="numberOfFloor">Số tầng:</label>
                    <input type="text" id="numberOfFloor" name="numberOfFloor" required></input>

                    <label for="facilityFree">Dịch vụ miễn phí:</label>
                    <input type="text" id="facilityFree" name="facilityFree" required></input>


                    <input type="submit" value="Gửi"></input>
                </form>

            </>
        )
    }
}
export default FacilityCreate