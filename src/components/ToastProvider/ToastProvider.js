import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext()

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([])
  
  function createToast(message, variant) {
    setToasts((currentToasts) => {
      return [
        ...currentToasts,
        { 
          id: crypto.randomUUID(), 
          message, 
          variant
        }
      ]
    })
  }
  
  function dismissToast(id) {
    setToasts((currentToasts) => {
      return currentToasts.filter((toast) => id !== toast.id)
    })
  }
  
  function dissmissAllToasts(event) {
    if (event.code === "Escape") {
      setToasts([])
    }
  }

  useEscapeKey(dissmissAllToasts)

  return (
    <ToastContext.Provider value={{toasts, createToast, dismissToast}}>
      {children}
    </ToastContext.Provider>
  ) 
}

export default ToastProvider;
