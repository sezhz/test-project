import React from "react";

const Modal = ({ showModal, handleCloseModal }) => {
  return (
    showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md">
          <p>
            Зареєструйтесь, або увійдіть за допомогою цих даних:
            <br />
            Логін: admin
            <br /> Пароль: admin
          </p>
          <button
            className="mt-4 border border-gray-200 p-1"
            onClick={handleCloseModal}
          >
            Закрити
          </button>
        </div>
      </div>
    )
  );
};

export default Modal;
