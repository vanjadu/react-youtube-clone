import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

import "./Header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/400px-YouTube_Logo_2017.svg.png"
            alt="logo"
            className="header__logo"
          />
        </Link>
      </div>
      <div className="header__center">
        <input
          type="text"
          placeholder="Search"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__search-icon" />
        </Link>
      </div>
      <div className="header__right">
        <VideoCallIcon className="header__right-icon" />
        <AppsIcon className="header__right-icon" />
        <NotificationsIcon className="header__right-icon" />
        <Avatar src="./images/profile.jpeg" alt="Vanja" />
      </div>
    </div>
  );
};

export default Header;
