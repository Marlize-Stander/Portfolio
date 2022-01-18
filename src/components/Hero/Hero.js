import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Portfolio
      </SectionTitle>
      <SectionText>Marketer, Graphic Designer and Web Developer</SectionText>
      <Button
        onClick={() => (window.location = 'https://github.com/Marlize-Stander')}
      >
        Learn more
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
