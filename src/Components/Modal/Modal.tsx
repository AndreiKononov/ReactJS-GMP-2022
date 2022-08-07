import ReactDOM from 'react-dom';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren, useEffect } from 'react';
import styles from './Modal.module.scss';

interface ModalConfig {
  title: string;
  handleClose: () => void;
}

const modalRoot = document.getElementById('modal-container');

const Modal = ({ title, handleClose, children }: PropsWithChildren<ModalConfig>) => {
  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const closeBtn = (
    <button onClick={handleClose} className={styles.modalCloseBtn}>
      <FontAwesomeIcon icon={faClose} />
    </button>
  );

  const modalLayout = (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        {closeBtn}

        <div className={styles.modalHeader}>
          <span className={styles.modalHeaderTitle}>{title}</span>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalLayout, modalRoot as HTMLElement);
};

export default Modal;
