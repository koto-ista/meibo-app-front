import React from 'react';
import HeaderTab from '../molecules/HeaderTab';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const headerTabList = [
    { label: '従業員', jumpList: [
      { label: '従業員一覧', onClick: () => navigate('/employee') },
      { label: '従業員登録', onClick: () => navigate('/employee/add') },
    ] },
    { label: '顧客', jumpList: [
      { label: '顧客一覧', onClick: () => navigate('/customer') },
      { label: '顧客登録', onClick: () => navigate('/customer/add') },
    ] },
    { label: '取引先', jumpList: [
      { label: '取引先一覧', onClick: () => navigate('/customer') },
      { label: '取引先登録', onClick: () => navigate('/customer/add') },
    ] },
  ];
  
  return (
    <header>
      <div className="header-wrapper">
        <h1 className="logo">ロログ</h1>
        <h2 className="logo-sub">各種名簿管理アプリ</h2>
        {/* ナビゲーション要素として切り出す */}
        <nav className="header-nav">
          <ul className="header-nav-list">
            {headerTabList.map((item) => (
              <HeaderTab key={item.label} label={item.label} jumpList={item.jumpList} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;