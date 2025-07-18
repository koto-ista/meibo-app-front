import React from 'react';
import { useParams } from 'react-router-dom';
import EmployeeForm from '../../modele/EmployeeForm';
import { Employee } from '../base';

interface Props {
  employees: Employee[];
  editEmployee: (employee: Employee) => void;
}

const EmployeeDetail = (props: Props) => {
  const { employeeId } = useParams();
  const employee = props.employees.find((employee) => employee.id === Number(employeeId));
  return (
    <div>
      <h1>従業員詳細</h1>
      <EmployeeForm employee={employee} setEmployee={props.editEmployee} />
    </div>
  );
};

export default EmployeeDetail;