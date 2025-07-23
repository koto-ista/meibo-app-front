import { Routes, Route } from 'react-router-dom';
import EmployeeIndex from '../organisms/employee/index';
import EmployeeAdd from '../organisms/employee/add';
import EmployeeDetail from '../organisms/employee/detail';
import { useState } from 'react';
import EmployeeTemplate from '../templates/employeeTemplate';
import { useEmployees } from '../../hook/useEmployees';

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
}

// テーブルのデータ(今後、APIからDBを経由して取得する) 
const employeeTableRawData: Employee[] = [
  { id: 1, name: '山田太郎', company: '株式会社テスト', email: 'yamadaT@example.com' },
  { id: 2, name: '山田花子', company: '株式会社テスト', email: 'yamadaH@example.com' },
  { id: 3, name: '山田次郎', company: '株式会社テスト', email: 'yamadaJ@example.com' },
]

const EmployeeRouter = () => {
  const { employees, addEmployee, editEmployee, deleteEmployee } = useEmployees(employeeTableRawData);

  const employeeTableData = {
    header: employeeTableHeader,
    rows: employees,
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <EmployeeTemplate title="従業員一覧">
              <EmployeeIndex data={employeeTableData} deleteEmployee={deleteEmployee} />
            </EmployeeTemplate>
          }
        />
        <Route
          path="/add"
          element={
            <EmployeeTemplate title="従業員追加">
              <EmployeeAdd addEmployee={addEmployee} />
            </EmployeeTemplate>
          }
        />
        <Route
          path="/detail/:employeeId"
          element={
            <EmployeeTemplate title="従業員詳細">
              <EmployeeDetail employees={employees} editEmployee={editEmployee} />
            </EmployeeTemplate>
          }
        />
      </Routes>
    </div>
  );
};

export default EmployeeRouter;