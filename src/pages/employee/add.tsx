import React from 'react';
import EmployeeForm from '../../modele/EmployeeForm';
import { Employee } from '../base';

interface Props {
  addEmployee: (employee: Employee) => void;
}

const EmployeeAdd = (props: Props) => {
  return (
    <div className="employee-add-wrapper">
      <h1>従業員詳細</h1>
      <EmployeeForm setEmployee={props.addEmployee} label="登録" />
    </div>
  );
};
export default EmployeeAdd;