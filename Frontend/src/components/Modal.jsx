import React, { useState, useEffect, useRef } from 'react';
import Login from './Login.jsx';
import Register from './Register2.jsx';

function Modal() {
  const [isLogin, setIsLogin] = useState(true);
  const modalRef = useRef(null);

  const handleSwitchToRegister = () => setIsLogin(false);
  const handleSwitchToLogin = () => setIsLogin(true);

  const handleCloseModal = () => {
    // Handle modal close action here
    setIsLogin(true); // Reset to login view on modal close
    modalRef.current.close();
  };

  useEffect(() => {
    const modal = document.getElementById('my_modal_1');
    modal.addEventListener('close', handleCloseModal);
    return () => {
      modal.removeEventListener('close', handleCloseModal);
    };
  }, []);

  return (
    <div>
      <dialog id="my_modal_1" className="modal" ref={modalRef}>
        <div className="modal-box p-0 flex flex-col h-full">
          <div className="flex-grow">
            {isLogin ? (
              <Login onSwitchToRegister={handleSwitchToRegister} />
            ) : (
              <Register onSwitchToLogin={handleSwitchToLogin} />
            )}
          </div>
          <div className="modal-action flex items-center justify-center mt-[-80px]">
            <form method="dialog" className="flex items-center">
              <button type="button" className="btn" onClick={handleCloseModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
