import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection,NameSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
         
          Bahar Adamiat <br />
          
          Personal Portfolio
        </SectionTitle>
        <SectionText>
        Experienced Front-End Developer with a demonstrated history of working in the computer software industry. Skilled in Javascript, ReactJs, NodeJs,Express and Software testing. Strong engineering professional with a Master focused in Information technology management from industrial management institute.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;