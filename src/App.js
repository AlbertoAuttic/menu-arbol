import React from "react";
import { ReactComponent as HomeIcon} from './icons/home.svg';

const App = () =>{
  return (
    <NavBar>
      <NavItem icon={<HomeIcon />}/>
    </NavBar>
  );
};


const NavBar = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
};

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <a href="#" className="icon-button">
        {props.icon}
      </a>
    </li>
  );
};

export default App;
