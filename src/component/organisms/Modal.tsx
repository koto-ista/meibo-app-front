import React from 'react';
import Button from '../atoms/Button';

interface Props {
  message: string;
  onOK: () => void;
  onCancel: () => void;
  showFlag: boolean;
}

const Modal = (props: Props) => {
  if (!props.showFlag) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onCancel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>{props.message}</p>
        <div className="modal-button-wrapper">
          <Button className="ok-button" label="OK" onClick={props.onOK} />
          <Button className="cancel-button" label="キャンセル" onClick={props.onCancel} />
        </div>
      </div>
    </div>
  );
};

export default Modal;