import React from 'react';
import { useParams } from 'react-router-dom';

const EmployeeDetail = () => {
  const { employeeId } = useParams();
  return <div>Employee-Detail {employeeId}</div>;
};

export default EmployeeDetail;