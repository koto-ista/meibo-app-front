import React, { useState } from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Employee from './employee';
import EmployeeAdd from './employee/add';
import EmployeeDetail from './employee/detail';
import Header from './Header';
import EmployeeIndex from './employee';

export type Employee = {
  id: number;
  name: string;
  company: string;
  email: string;
}
// テーブルのヘッダー
const employeeTableHeader = {
  id: 'ID',
  name: '名前',
  company: '所属企業',
  email: 'メールアドレス',
  operation: '操作',
}

// テーブルのデータ(今後、APIからDBを経由して取得する) 
const employeeTableRawData: Employee[] = [
  { id: 1, name: '山田太郎', company: '株式会社テスト', email: 'yamadaT@example.com' },
  { id: 2, name: '山田花子', company: '株式会社テスト', email: 'yamadaH@example.com' },
  { id: 3, name: '山田次郎', company: '株式会社テスト', email: 'yamadaJ@example.com' },
]

const Base = () => {
  const [employees, setEmployees] = useState<Employee[]>(employeeTableRawData);

  const addEmployee = (employee: Employee) => {
    employee.id = employees.length + 1;
    setEmployees([...employees, employee]);
  };
  const editEmployee = (employee: Employee) => {
    setEmployees(employees.map(e => e.id === employee.id ? employee : e));
  }
  const employeeTableData = {
    header: employeeTableHeader,
    rows: employees,
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/employee" element={<EmployeeIndex data={employeeTableData} />} />
        <Route path="/employee/add" element={<EmployeeAdd addEmployee={addEmployee} />} />
        <Route path="/employee/detail/:employeeId" element={<EmployeeDetail employees={employees} editEmployee={editEmployee} />} />
      </Routes>
    </div>
  );
};

export default Base;