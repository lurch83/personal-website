import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {NavBox, NavContainer, Button} from './NavComponents';

const NavLink = props => {

  const {pathname, to, title} = props;
  const isSelected = (pathname === to);
  
  return(
    <Button selected={isSelected}>
      <Link to={to}>{title}</Link>
    </Button>
    
  );
};

NavLink.PropTypes = {
  pathname: React.PropTypes.bool,
  to: React.PropTypes.string,
  title: React.PropTypes.string
};

const MobileNav = styled.div`
  background-color: green;
  display: none;
  @media(max-width: 768px){
    display: block;
  }
`;


class Nav extends Component {
  
  render() {  
    const {pathname} = this.props.location;

    return(    
      <div>      
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
        <MobileNav className="nav-mobilenav">
          Mobile Nav
        </MobileNav>
      </div>
    );    
  }
}

export default Nav;