import React from 'react';
import Button from '../../component/Button';
import Table, { TableProps } from '../../modele/Table';

type Employee = {
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
  { id: 1, name: '山田太郎', company: '株式会社テスト', email: 'yamada@example.com' },
  { id: 2, name: '山田太郎', company: '株式会社テスト', email: 'yamada@example.com' },
  { id: 3, name: '山田太郎', company: '株式会社テスト', email: 'yamada@example.com' },
]

// テーブルのデータをテーブルコンポーネントに渡す
const employeeTableData: TableProps<Employee> = {
    data: {
      header: employeeTableHeader,
      rows: employeeTableRawData,
    }
}


const Employee = () => {
  return (
    <div className="employee-list-wrapper">
      <h1>従業員一覧</h1>
      <div className="employee-list-header">
        <Button className="top" label="新規登録" />
      </div>
      <div className="employee-list">
        <Table<Employee> data={employeeTableData.data} />
      </div>
    </div>
  );
};

export default Employee;