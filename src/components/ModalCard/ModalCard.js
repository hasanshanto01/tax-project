import React from "react";

const ModalCard = ({ modalId }) => {
  return (
    <dialog id={`${modalId}`} className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <p className="py-4">
          We are working on it, Please contact us, <strong>01620002467</strong>
        </p>
      </div>
    </dialog>
  );
};

export default ModalCard;
