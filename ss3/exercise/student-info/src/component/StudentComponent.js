const students=[
    {
      id:1,
      name:'Nghĩa',
      age:18,
      address:'44/9 Trần Bình Trọng'
    },
    {
      id:2,
      name:'Tài',
      age:20,
      address:'24 Trưng Nữ Vương'
    },
    {
      id:3,
      name:'Định',
      age:23,
      address:'32 Nguyễn Hoàng'
    }
  ]
  
function StudentComponent(students) {
    return (
        <table className="table-table striped">
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Age</td>
                <td>Address</td>
            </tr>
    <tbody>
            {students.map((student, st1) => (
      <tr key={st1.toString()}>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.age}</td>
        <td>{student.address}</td>
      </tr>
    ))
    }
    </tbody>
        </table>
    );
}

export default StudentComponent;





 