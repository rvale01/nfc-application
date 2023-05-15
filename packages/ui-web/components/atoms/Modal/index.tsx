import { Modal as AntModal } from 'antd';
import { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
  isShowing: boolean;
  title?: string;
  onCancel: () => void;
  onConfirm: () => void;
  cancelText?: string;
  confirmText?: string;
}

export const Modal = ({ children, isShowing, title, onCancel, onConfirm, cancelText, confirmText }: ModalProps) => {
  return (
    <AntModal open={isShowing} title={title} onCancel={onCancel} onOk={onConfirm} cancelText={cancelText} okText={confirmText}>
      {children}
    </AntModal>
  );
};