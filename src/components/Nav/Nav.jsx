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
            to="/blog" 
            title="Blog" 
            />   
        </NavContainer>        
      </NavBox>
    );    
  }
}

export default Nav;