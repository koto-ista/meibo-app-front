import React from 'react';
import EmployeeForm from '../EmployeeForm';
import { Employee } from '../../pages/employeeRouter';

interface Props {
  addEmployee: (employee: Employee) => void;
}

const EmployeeAdd = (props: Props) => {
  return (
    <div className="employee-add-wrapper">
      <EmployeeForm setEmployee={props.addEmployee} label="登録" />
    </div>
  );
};
export default EmployeeAdd;