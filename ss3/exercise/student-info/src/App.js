import logo from './logo.svg';
import './App.css';
import React from 'react';

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


function App() {
  return (
    <table class="table table-striped">
    <tr>
      <td>STT</td>
      <td>Tên</td>
      <td>Tuổi</td>
      <td>Địa Chỉ</td>
    </tr>
    {students.map((student, st1) => (
      <tr key={st1.toString()}>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.age}</td>
        <td>{student.address}</td>
      </tr>
    ))
    }
   </table>
  );
}

export default App;
