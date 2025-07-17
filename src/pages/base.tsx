import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Employee from './employee';
import EmployeeAdd from './employee/add';
import EmployeeDetail from './employee/detail';
import Header from './Header';

const Base = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Employee />} />
        <Route path="/employee/add" element={<EmployeeAdd />} />
        <Route path="/employee/detail" element={<EmployeeDetail />} />
      </Routes>
    </div>
  );
};

export default Base;