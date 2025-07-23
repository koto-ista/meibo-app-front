import React, { useState } from 'react';
import Button from '../atoms/Button';
import { useHoverOpen } from '../../hook/useHoverOpen';


type JumpItem = {
  label: string;
  onClick: () => void;
};

interface HeaderTabProps {
  label: string;
  jumpList: JumpItem[];
}

const HeaderTab = (props: HeaderTabProps) => {
  const { open, handleMouseEnter, handleMouseLeave, close } = useHoverOpen();

  const onClick = (onClick: () => void) => {
    onClick();
    close();
  }

  return (
    <div className="header-tab" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Button className="tab-button" label={props.label} />
      {open && (
        <div className="header-tab-list">
          {props.jumpList.map((item) => (
            <li className="header-tab-item" key={item.label} onClick={() => onClick(item.onClick)}>{item.label}</li>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderTab;