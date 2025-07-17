import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <h1 className="logo">ロログ</h1>
        <h2 className="logo-sub">各種名簿管理アプリ</h2>
        {/* ナビゲーション要素として切り出す */}
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item"><a href="/">従業員</a></li>
            <li className="header-nav-item"><a href="/">顧客</a></li>
            <li className="header-nav-item"><a href="/">取引先</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;