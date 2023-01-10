import React from "react";
import { Link } from "react-router-dom";
const menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Quiz",
    link: "/quiz",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Menu = () => {
  return (
    <div className="menuCon container-fluid">
      <ul className="list p-2">
      <Link className="navbar-brand text-white text-bold d-none d-sm-block" to="/">QuizApp</Link>
        {menu.map((element) => {
          return (
            <li key={element.name} className="list-item">
              <Link to={element.link}>{element.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
