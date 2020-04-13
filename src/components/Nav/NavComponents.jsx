import styled from 'styled-components';

const NavBox = styled.div`  
  background-color: #333;  
  color: #fff;
  padding: 20px;  
  -moz-box-shadow: 0 0 3px #ccc;
  -webkit-box-shadow: 0 0 3px #ccc;
  box-shadow: 0 0 2px #ccc;
  position: sticky;
  top:0px;  
  
  a {
    float:none;    
    color: #f2f2f2;
    text-align: center;
    text-transform: uppercase;
    padding: 20px;
    text-decoration: none;
    font-size: 17px;
  }
 
  @media screen and (min-width:800px){
    a:hover {
      background-color: #2288bb;
      color: #fff;
    }
  }

  
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 75rem;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
`;

const Button = styled.span`
  float: none;
  border-bottom: ${props => props.selected ? '#00adff' : ''};
  border-bottom-style: ${props => props.selected ? 'ridge' : ''};
  border-bottom-width: ${props => props.selected ? '2px' : ''};
  padding-bottom: ${props => props.selected ? '20px' : ''};
`;

export {NavBox, NavContainer, Button};