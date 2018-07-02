import React from 'react';
import Box from '../Box/Box';
import styled from 'styled-components';
import me from '../../assets/images/me-round-min.png';
import iracing from '../../assets/images/iracing.png';
import Icon from './Icon';
import {ICONS} from '../../constants.js'

const CenterTextContainer = styled.div`
  text-align: center;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
`;

const PaddingTop20 = styled.div`
  padding-top: 20px;
`;

const IconWrapper = styled.span`
  padding: 10px;
`

const LeftAlign = styled.p`
  text-align: left;
`

const About = () => {  
  return(
    <Box>        
      <CenterTextContainer>
        <img src={me} alt="me" />
        <h2>Andrew Doyle</h2>        
        <p>
          Sofware Developer currently working at <a target="_blank" href="https://twitter.com/LWBAustralia">@LWBAustralia</a>
        </p>
        <LeftAlign>
          Based in Newcastle, NSW, Australia, I have been a professional software developer since 2010 and I am passionate about building
          flexible, maintainable and fit for purpose software solutions. 
        </LeftAlign>
        <LeftAlign>
          The majority of my latest work has been in the NodeJS / React ecosystem using AWS infrastructure. 
          My workplace also has legacy systems built using the Microsoft .NET platform stack.
        </LeftAlign>
        <LeftAlign>
          When not writing code, I enjoy motorsports, sim racing (<a target="_blank" href="http://www.iracing.com">iRacing</a>) and spending time with my family.
          You can find me on iRacing under <a target="_blank" href="http://members.iracing.com/membersite/member/CareerStats.do?custid=169134">Andrew Doyle2</a>
        </LeftAlign>        
        <PaddingTop20>
          <IconWrapper>
            <a target="_blank" href="https://github.com/lurch83"><Icon icon={ICONS.GITHUB} size="25"/></a>                    
          </IconWrapper>
          <IconWrapper>
            <a target="_blank" href="https://twitter.com/andrewdoyle19"><Icon icon={ICONS.TWITTER} size="25"/></a>
          </IconWrapper>
          <IconWrapper>
            <a target="_blank" href="https://www.linkedin.com/in/andrew-doyle-7a241332/"><Icon icon={ICONS.LINKEDIN} size="25"/></a>
          </IconWrapper>
        </PaddingTop20>
      </CenterTextContainer>
    </Box> 
  );    
}

export default About;