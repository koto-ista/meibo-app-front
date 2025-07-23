import { useState } from 'react';
import { Employee } from '../component/pages/employeeRouter';

export function useEmployees(initial: Employee[]) {
  const [employees, setEmployees] = useState<Employee[]>(initial);

  const addEmployee = (employee: Employee) => {
    employee.id = employees.length + 1;
    setEmployees([...employees, employee]);
  };
  const editEmployee = (employee: Employee) => {
    setEmployees(employees.map(e => e.id === employee.id ? employee : e));
  };
  const deleteEmployee = (id: number) => {
    setEmployees(employees.filter(e => e.id !== id));
  };

  return { employees, addEmployee, editEmployee, deleteEmployee };
}