import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {NavBox, NavContainer, Button} from './NavComponents';


const isLocalUrl = (url) => /^\/(?!\/)/.test(url)

const NavLink = props => {

  const {pathname, to, title} = props;
  const isSelected = (pathname === to);
  
  const link = isLocalUrl(to) 
  ? <Link to={to}>{title}</Link>
  : <a href={to}>{title}</a>

  return(
    <Button selected={isSelected}>
      {link}
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
            to="https://github.com/lurch83" 
            title="GitHub" 
            />   
          <NavLink 
            pathname={pathname}
            to="https://www.linkedin.com/in/andrew-doyle-7a241332/" 
            title="LinkedIn" 
          />
          <NavLink 
            pathname={pathname}
            to="https://www.instagram.com/andrewdoyle19" 
            title="Instagram" 
          />
        </NavContainer>        
      </NavBox>
    );    
  }
}

export default Nav;