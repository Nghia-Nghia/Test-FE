import React from "react";
import "./dialog.css";
import { Button, ButtonGroup } from "@shopify/polaris";
interface DialogProps {
  isOpen: boolean;
  title: string;
  message?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose: () => void;
  confirmText?: string;
  cancelText?: string;
  disableCancel?: boolean;
  disableConfirm?: boolean;
  element?: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  onClose,
  confirmText,
  cancelText,
  disableCancel,
  disableConfirm,
  element
}) => {
  const handleClickIconHeadClose = () => {
    if (onCancel) {
      onCancel();
    }
    onClose();
  };

  const handleClickCancel = () => {
    if (onCancel) {
      onCancel();
    }

    onClose();
  };
  const handleClickComfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  };
  return isOpen ? (
    <div className='my-dialog'>
      <div className='my-dialog__content'>
        <div className='my-dialog__content-head'>
          <h2>{title}</h2>
          <div className='my-dialog__content-head__close' onClick={handleClickIconHeadClose}>
            <svg
              viewBox='0 0 20 20'
              className='Polaris-Icon__Svg'
              focusable='false'
              aria-hidden='true'
            >
              <path d='M12.72 13.78a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06l-2.72 2.72-2.72-2.72a.75.75 0 0 0-1.06 1.06l2.72 2.72-2.72 2.72a.75.75 0 1 0 1.06 1.06l2.72-2.72 2.72 2.72Z'></path>
            </svg>
          </div>
        </div>
        <div className='my-dialog__content__body'>
          {message ? <p>{message}</p> : null}
          {element}
        </div>
        <div className='my-dialog__content__actions'>
          <ButtonGroup>
            {!disableCancel && (
              <Button onClick={handleClickCancel}>{cancelText ?? "Cancel"}</Button>
            )}
            {!disableConfirm && (
              <Button onClick={handleClickComfirm} variant='primary'>
                {confirmText ?? "Ok"}
              </Button>
            )}
          </ButtonGroup>
        </div>
      </div>
    </div>
  ) : null;
};

export default Dialog;
