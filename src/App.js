import React, { useState } from 'react';

import { ReactComponent as HomeIcon} from './icons/home.svg';
import { ReactComponent as AboutIcon} from './icons/about.svg';
import { ReactComponent as CaretIcon} from './icons/caret.svg';
import { ReactComponent as TutorialIcon} from './icons/tutorial.svg';

const App = () =>{
  return (
    <NavBar>
      <NavItem icon={<HomeIcon />}/>
      <NavItem icon={<AboutIcon />}/>
      {/* <NavItem icon={<TutorialIcon />}/> */}
      
      <NavItem icon={<CaretIcon />} > 
        <DropDownMenu/>
        
      </NavItem>

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
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
};

const DropDownMenu = () => {
  
  const DropDownItem = (props) => {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>

        {props.children}
        
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  };
  
  return (
    <div className="dropdown">
      <DropDownItem>Test</DropDownItem>
      <DropDownItem 
        leftIcon={<TutorialIcon />}>
        Tutorial
      </DropDownItem>

    </div>
  )
};

export default App;
