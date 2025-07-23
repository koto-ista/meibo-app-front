import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeRouter from './employeeRouter';
import Header from '../pages/Header';

const BaseRoot = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/employee/*" element={<EmployeeRouter />} />
      </Routes>
    </div>
  );
};

export default BaseRoot;