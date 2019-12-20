import React from "react";
import Modal from "react-modal";
import { FaBus, FaPlane } from "react-icons/fa";
import { AiOutlineSmallDash } from "react-icons/ai";
import { MdTrain } from "react-icons/md";
import { IconContext } from "react-icons";

import "./itemmodal.css";

Modal.setAppElement("#app");

class ItemModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { showModal, closeModal, targetItem } = this.props;
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        overlay: { zIndex: 2 }
      }
    };
    const TypeIcon = targetItem
      ? targetItem.type == "bus"
        ? FaBus
        : targetItem.type == "train"
        ? MdTrain
        : FaPlane
      : null;

    return (
      <Modal
        closeTimeoutMS={50}
        isOpen={showModal}
        //   onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="booking Link Modal"
      >
        {targetItem ? (
          <div className="layout-vertical-center modal">
            <div className="layout-horizontal-center modal-content">
              <div className="layout-vertical-center modal-dep-arr">
                <div className="modal-location">
                  {targetItem.departure_location}
                </div>
                <div className="modal-time">{targetItem.departure_time}</div>
              </div>
              <div className="modal-type">
                <IconContext.Provider value={{ size: "20px"}}>
                  <div className="layout-horizontal-center">
                    <AiOutlineSmallDash />
                    <TypeIcon className='modal-icon'/>
                    <AiOutlineSmallDash />
                  </div>
                </IconContext.Provider>
              </div>
              <div className="layout-vertical-center modal-dep-arr">
                <div className="modal-location">
                  {targetItem.arrival_location}
                </div>
                <div className="modal-time">{targetItem.arrival_time}</div>
              </div>
            </div>
            <div className="modal-content">당신의 여정 금액은</div>
            <div className="modal-cost">{targetItem.cost}원</div>
            <div className="modal-content modal-link-container ">
              <a href="/home">
                <span className="modal-link">예약하러 가실까요?</span>
              </a>{" "}
            </div>
          </div>
        ) : (
          <></>
        )}
      </Modal>
    );
  }
}

export default ItemModal;
