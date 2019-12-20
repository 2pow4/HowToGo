import React from "react";
import moment from "moment";
import { AiOutlineSmallDash } from "react-icons/ai";
import { IconContext } from "react-icons";
import ItemModal from "../ItemModal/ItemModal";

import "./item.css";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      targetItem: null
    };
  }

  openModal = (e, item) => {
    this.setState({
      showModal: !this.state.showModal,
      targetItem: item
    })
  }

  closeModal = e =>{
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render() {
    const { list } = this.props;
    const { showModal, targetItem } = this.state;

    return (
      <>
        <ul className="layout-vertical-center">
          {list.map((item, index) => {
            const elapseTime = moment(item.arrival_time, "HH:mm").diff(
              moment(item.departure_time, "HH:mm"),
              "minutes"
            );
            return (
              <li
                key={index}
                className="container__result"
                onClick={e => this.openModal(e, item)}
              >
                <div className="ratio-3 container__dep-arr layout-horizontal-center">
                  <div className="ratio-1">
                    <div className="content__time">{item.departure_time}</div>
                    <div>{item.departure_location}</div>
                  </div>
                  <div className="ratio-2  layout-horizontal-center">
                    <IconContext.Provider
                      value={{ color: "#bbbbbb", size: "30px" }}
                    >
                      <AiOutlineSmallDash />
                      {"   "}
                      <div className="content__elapse-time">{`   ${elapseTime}분   `}</div>
                      {"   "}
                      <AiOutlineSmallDash />
                    </IconContext.Provider>
                    <div>&emsp;&emsp;</div>
                  </div>
                  <div className="ratio-1">
                    <div className="content__time">{item.arrival_time}</div>
                    <div>{item.arrival_location}</div>
                  </div>
                </div>
                <div className="ratio-1 content__cost">{item.cost}원</div>
              </li>
            );
          })}
        </ul>
        <ItemModal showModal={showModal} closeModal={this.closeModal} targetItem={targetItem} />
      </>
    );
  }
}

export default Item;
