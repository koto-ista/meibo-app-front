import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeRouter from '../component/pages/employeeRouter';
import Header from '../component/organisms/Header';

const BaseRoot = () => {
  return (
    <div>
      <Routes>
        <Route path="/employee/*" element={<EmployeeRouter />} />
      </Routes>
    </div>
  );
};

export default BaseRoot;