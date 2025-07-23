import React from 'react';
import { useParams } from 'react-router-dom';
import EmployeeForm from '../EmployeeForm';
import { Employee } from '../../pages/employeeRouter';

interface Props {
  employees: Employee[];
  editEmployee: (employee: Employee) => void;
}

const EmployeeDetail = (props: Props) => {
  const { employeeId } = useParams();
  const employee = props.employees.find((employee) => employee.id === Number(employeeId));
  return (
    <div className="employee-detail-wrapper">
      <EmployeeForm employee={employee} setEmployee={props.editEmployee} label="更新" />
    </div>
  );
};

export default EmployeeDetail;