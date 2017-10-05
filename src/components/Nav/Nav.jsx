import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {NavBox, NavContainer, Button} from './NavComponents';
import {stack as Menu} from 'react-burger-menu';

const NavLink = props => {

  const {pathname, to, title} = props;
  const isSelected = (pathname === to);
  
  return(
    // <Button selected={isSelected}>
      <Link to={to}>{title}</Link>
    // </Button>
    
  );
};

NavLink.PropTypes = {
  pathname: React.PropTypes.bool,
  to: React.PropTypes.string,
  title: React.PropTypes.string
};

const MobileNav = styled.div`
 
`;


class Nav extends Component {
  constructor(props){
    super(props);    
    this.state = {menuOpen: false};
  }
  
  handleMenuClick(event){    
    this.setState({menuOpen: false})
  }

  render() {  
    const {pathname} = this.props.location;
    const {menuOpen} = this.state; 
    let styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            left: '36px',
            top: '36px',
            color: 'red'
        },
        bmBurgerBars: {
            background: '#373a47'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenu: {
            background: '#373a47',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em',
            overflow: 'hidden'          
        },        
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em',
            a: {              
              color: 'blanchedalmond'        
            }
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
        
    };

    return(    
        
      <div>
             
          <Menu isOpen={menuOpen} styles={styles}>
          <div>open: {menuOpen}</div>   
            <Link onClick={ this.handleMenuClick } id="home"  to="/">Home</Link>
            <Link onClick={ this.handleMenuClick } id="about" to="/about">About</Link>
            {/*<a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>*/}
          </Menu>
      </div>
    );    
  }
}

export default Nav;