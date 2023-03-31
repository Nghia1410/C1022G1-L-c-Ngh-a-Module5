import {Component} from "react";

class Input extends Component {
    constructor() {
        super();
        this.state = {
            todoName: '',
            todoList: []
        }
    }

    handleInputName(value) {
        this.setState({
            todoName: value
        })
    }

    handleAddTodo() {
        // sao chép mảng cũ
        let newArr = [...this.state.todoList, this.state.todoName]
        // thêm phần tử
        this.setState({
            todoName: '',
            todoList: newArr
        })
    }

    render() {
        let stt = 1;
        return (
            <>
                <div className="text-center">
                    <h1 className="mb-5">Todo List</h1>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control"
                               placeholder="Enter Todo now !!"
                               aria-label="Enter Todo now !!"
                               aria-describedby="button-addon2"
                               value={this.state.todoName}
                               onChange={(event) => this.handleInputName(event.target.value)}/>
                        <button className="btn btn-outline-secondary"
                                type="button"
                                id="button-addon2"
                                onClick={() => this.handleAddTodo()}
                        >Button
                        </button>
                    </div>

                    {/*<div>*/}
                    {/*    <input*/}
                    {/*        type="text"*/}
                    {/*        placeholder="Text"*/}
                    {/*        className='form-control'*/}
                    {/*        value={this.state.todoName}*/}
                    {/*        onChange={(event) => this.handleInputName(event.target.value)}*/}
                    {/*    />*/}
                    {/*    <button onClick={() => this.handleAddTodo()} className='btn btn-outline-secondary'>thêm mới*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>

                <div>
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.todoList.map((value, index) => (
                            <tr key={index}>
                                <td>{stt++}</td>
                                <td>{value}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}


export default Input;