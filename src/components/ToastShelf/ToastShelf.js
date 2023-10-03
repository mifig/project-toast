import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext)

  return (
    <ol className={styles.wrapper} 
        role="region"
        aria-live="polite"
        aria-label="Notification">
      {toasts.map((toast) => {
        return (
          <li className={styles.toastWrapper} key={Math.random()}>
            <Toast toast={toast} />
          </li>
        )
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
