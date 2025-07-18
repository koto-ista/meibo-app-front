import React from 'react';
import Button from '../../component/Button';
import Table, { TableProps } from '../../modele/Table';
import { useNavigate } from 'react-router-dom';
import { Employee } from '../base';

interface Props {
  data: {
    header: { [key: string]: string };
    rows: Employee[];
  }
};

const EmployeeIndex = (props: Props) => {
  const navigate = useNavigate();

  const onEdit = (id: number) => {
    console.log(id);
    navigate('/employee/detail/' + id);
  }
  const onDelete = (id: number) => {
    console.log(id);
  }
  // テーブルのデータをテーブルコンポーネントに渡す

  return (
    <div className="employee-list-wrapper">
      <h1>従業員一覧</h1>
      <div className="employee-list-header">
        <Button className="top" label="新規登録" />
      </div>
      <div className="employee-list">
        <Table<Employee>
          data={props.data}
          onEdit={onEdit}
          onDelete={onDelete} />
      </div>
    </div>
  );
};

export default EmployeeIndex;