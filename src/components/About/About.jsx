import React from 'react';
import Box from '../Box/Box';
import styled from 'styled-components';
import me from '../../assets/images/me-round-min.png';

const CenterTextContainer = styled.div`
  text-align: center;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
`;

const PaddingTop20 = styled.div`
  padding-top: 20px;
`;


const LeftAlign = styled.p`
  text-align: left;
`

const About = () => {  
  return(
    <Box>        
      <CenterTextContainer>
        <img src={me} alt="me" />
        <h2>Andrew Doyle</h2>        
        <LeftAlign>
          Sofware Developer currently working at <a href="https://www.lwb.org.au">Life Without Barriers</a>, a not for profit organisation whose goal
          is to partner with people and change lives for the better.
        </LeftAlign>
        <LeftAlign>
          Based in Newcastle, NSW, Australia, I have been a professional software developer since 2010 and I am passionate about building
          flexible, maintainable and fit for purpose software solutions. 
        </LeftAlign>
        <LeftAlign>
          The majority of my latest work has been using Typescript/NodeJS to build serverless applications deployed to Amazon Web Services using serverless technology.          
        </LeftAlign>
        <LeftAlign>
          When not writing code, I enjoy motorsports, <a href="https://www.instagram.com/andrewdoyle19">astro and landscape photography</a>, sim racing (<a href="http://www.iracing.com">iRacing</a>) and spending time with my family.          
        </LeftAlign>
      </CenterTextContainer>
    </Box> 
  );    
}

export default About;