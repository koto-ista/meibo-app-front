import React, { useState } from 'react';
import Button from '../../atoms/Button';
import Table, { TableProps } from '../OprerationTable';
import { useNavigate } from 'react-router-dom';
import { Employee } from '../../pages/employeeRouter';
import Modal from '../Modal';
import { useModal } from '../../../hook/useModel';

interface Props {
  data: {
    header: { [key: string]: string };
    rows: Employee[];
  }
  deleteEmployee: (id: number) => void;
};

const EmployeeIndex = (props: Props) => {
  const navigate = useNavigate();
  const { isOpen, open, close } = useModal();
  const [deleteId, setDeleteId] = useState(0);
  const [deleteName, setDeleteName] = useState('');

  // ボタンを押した時の処理
  // 新規登録ボタンを押した時の処理
  const onAdd = () => {
    navigate('/employee/add');
  };
  // 編集ボタンを押した時の処理
  const onEdit = (id: number) => {
    console.log(id);
    navigate('/employee/detail/' + id);
  };
  // 削除ボタンを押した時の処理
  const onDelete = (id: number) => {
    console.log(id);
    setDeleteId(id);
    setDeleteName(props.data.rows.find(e => e.id === id)?.name || '');
    open();
  };

  // モーダル用の関数
  const onOK = () => {
    props.deleteEmployee(deleteId);
    close();
  };
  const onCancel = () => {
    close();
  };

  return (
    <div className="employee-list-wrapper">
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
          showFlag={isOpen} />
    </div>
  );
};

export default EmployeeIndex;