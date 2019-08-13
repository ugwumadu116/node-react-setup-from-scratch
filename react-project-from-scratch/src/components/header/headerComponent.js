import React from "react";
import "./header.scss";
import SearchSvg from "../../assets/svg/search.svg";
import GroupSvg from "../../assets/svg/group-of-people.svg";
import AlarmSvg from "../../assets/svg/notification.svg";

const Header = () => {
  return (
    <header>
      <div className="search">
        <input type="text" />
        <div>
          <img className="search-icon" src={SearchSvg} alt="search icon" />
          <h4 className="search-text">search</h4>
        </div>
      </div>
      <div className="profile-image-container">
        <img
          className="profile-img"
          src="https://randomuser.me/api/portraits/men/32.jpg"
        />
      </div>
      <div className="greeting">
        <h3>Hello John</h3>
      </div>
      <div className="group">
        <img className="group-icon" src={GroupSvg} alt="group icon" />
      </div>
      <div className="group-notification">
        <div className="elips">
          <h5>2</h5>
        </div>
      </div>
      <div className="alarm">
        <img className="search-icon" src={AlarmSvg} alt="notification icon" />
        <div className="elips">
          <h5>2</h5>
        </div>
      </div>
    </header>
  );
};
export default Header;
