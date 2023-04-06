import { Component } from 'react'
class FacilityCreate extends Component {
    render() {
        return (
            <>
                <div className="p-3">

                    <h2 className="text-center fw-bold">FACILITY CREATE</h2>
                    <nav className="navbar navbar-expand-lg py-0 my-0">
                        <div className="container-fluid">

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
export default FacilityCreate;