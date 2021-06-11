import React from "react";

const Popup = ({ content, toggleModal }) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={toggleModal}>
          x
        </span>
        {content}
      </div>
    </div>
  );
};

export default Popup;
