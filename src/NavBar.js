import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { BsCalendar2Check } from "react-icons/bs"
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RiFridgeLine } from "react-icons/ri";
import "./NavBar.css";

export default class NavBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cardSelected: "fridge",
    };
  }

  static propTypes = {
    navChange: PropTypes.func,
  };

  handleClick = event => {
    let title = "";

    switch(event) {
      case "fridge":
        title = "What's in your fridge? ¯\\_(ツ)_/¯";
        break;
      case "grocery":
        title = "What do you need? ¯\\_(ツ)_/¯";
        break;
      case  "calendar":
        title = "What's planned for the week? ¯\\_(ツ)_/¯";
        break;
      default:
        title = "";
    }

    this.props.navChange(title);
    this.setState({ cardSelected: event });
  };

  render() {
    const { cardSelected } = this.state;

    return (
      <div className="app_navbar">
        <div
          className={`nav_card ${cardSelected == 'fridge' ? 'card_selected' : ''}`}
          onClick={() => this.handleClick("fridge")}
        >
          <RiFridgeLine />
        </div>
        <div
          className={`nav_card ${cardSelected == 'grocery' ? 'card_selected' : ''}`}
          onClick={() => this.handleClick("grocery")}
        >
          <MdOutlineLocalGroceryStore />
        </div>
        <div
          className={`nav_card ${cardSelected == 'calendar' ? 'card_selected' : ''}`}
          onClick={() => this.handleClick("calendar")}
        >
          <BsCalendar2Check />
        </div>
      </div>
    );
  }
}
