import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import './Nav.css';


const NavBox = styled.div`
  background-color: #333;  
  color: #fff;
  padding: 20px;  
  -moz-box-shadow: 0 0 3px #ccc;
  -webkit-box-shadow: 0 0 3px #ccc;
  box-shadow: 0 0 2px #ccc;
  position: sticky;
  top:0px;  
`;

const NavContainer = styled.div`
 width: 100%;
  max-width: 75rem;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
`;

const NavLink = props => {

  const {pathname, to, title} = props;
  const isSelected = pathname === to
  ? '__selected'
  : '';
  
  return(
    <span className={`nav-navlink${isSelected}`}>
      <Link to={to}>{title}</Link>
    </span>
    
  );
};

NavLink.PropTypes = {
  pathname: React.PropTypes.bool,
  to: React.PropTypes.string,
  title: React.PropTypes.string
};

class Nav extends Component {
  
  render() {  
    const {pathname} = this.props.location;

    return(    
      <NavBox className="nav-topnav">
        <NavContainer>
          <NavLink 
            pathname={pathname}
            to="/" 
            title="Home" 
            />
          <NavLink 
            pathname={pathname}
            to="/about" 
            title="About Me" 
            />   
        </NavContainer>        
      </NavBox>
    );    
  }
}

export default Nav;