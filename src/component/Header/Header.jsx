import React from "react";
import logo from "/src/assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiPlayCircle,
  HiStar,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import "./../Header/Header.css"

function HeaderItem({ name, icon: Icon }) {
  return (
    <div
      className="Icon "
    >
      <Icon />
      {name}
      <span></span>
    </div>
  );
}

function Header() {
  const menu = [
    {
      name: "ACCUEIL",
      icon: HiHome,
    },
    {
      name: "RECHERCHER",
      icon: HiMagnifyingGlass,
    },
    {
      name: "FAVORIS",
      icon: HiPlus,
    },
    {
      name: "ORIGINAUX",
      icon: HiStar,
    },
    {
      name: "FILMS",
      icon: HiPlayCircle,
    },
    {
      name: "SÉRIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="div-container">
      <img
        src={logo}
        alt=""
        className="logo"
      />
      {menu.map((item, index) => (
        <HeaderItem key={index} name={item.name} icon={item.icon} />
      ))}
    </div>
  );
}

export default Header;
