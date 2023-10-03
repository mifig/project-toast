import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import { ToastContext } from '../ToastProvider/ToastProvider';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({toast}) {
  const { dismissToast } = React.useContext(ToastContext)

  const IconTag = ICONS_BY_VARIANT[toast.variant]

  return (
    <div className={`${styles.toast} ${styles[toast.variant]}`}>
      <div className={styles.iconContainer}>
        <IconTag size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{toast.variant}</VisuallyHidden>
        {toast.message}
      </p>
      <button 
        className={styles.closeButton}
        aria-label={toast.variant}
        aria-live="off">
        <X size={24} onClick={() => dismissToast(toast.id)} />
      </button>
    </div>
  )
}

export default React.memo(Toast);
