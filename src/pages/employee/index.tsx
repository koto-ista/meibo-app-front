import React, { useState } from 'react';
import Button from '../../component/Button';
import Table, { TableProps } from '../../modele/Table';
import { useNavigate } from 'react-router-dom';
import { Employee } from '../base';
import Modal from '../../modele/modal';

interface Props {
  data: {
    header: { [key: string]: string };
    rows: Employee[];
  }
  deleteEmployee: (id: number) => void;
};

const EmployeeIndex = (props: Props) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const [deleteName, setDeleteName] = useState('');
  const onAdd = () => {
    navigate('/employee/add');
  };

  // ボタンを押した時の処理
  // 編集ボタンを押した時の処理
  const onEdit = (id: number) => {
    console.log(id);
    navigate('/employee/detail/' + id);
  }
  // 削除ボタンを押した時の処理
  const onDelete = (id: number) => {
    console.log(id);
    setDeleteId(id);
    setDeleteName(props.data.rows.find(e => e.id === id)?.name || '');
    setIsModalOpen(true);
  }
  // モーダル用の関数
  const onOK = () => {
    props.deleteEmployee(deleteId);
    setIsModalOpen(false);
  }
  const onCancel = () => {
    setIsModalOpen(false);
  }
  // テーブルのデータをテーブルコンポーネントに渡す

  return (
    <div className="employee-list-wrapper">
      <h1>従業員一覧</h1>
      <div className="employee-list-header">
        <Button className="top" label="新規登録" onClick={onAdd} />
      </div>
      <div className="employee-list">
        <Table<Employee>
          data={props.data}
          onEdit={onEdit}
          onDelete={onDelete} />
      </div>
      {/* モーダル */}
        <Modal
          message={`${deleteName} を削除しますか？`}
          onOK={onOK}
          onCancel={onCancel}
          showFlag={isModalOpen} />
    </div>
  );
};

export default EmployeeIndex;