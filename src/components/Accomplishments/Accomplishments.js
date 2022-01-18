import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';


// Accomplishments data
const data = [
  { number: 10, text: 'Open Source Projects'},
  { number: 12, text: 'Completed courses through Udemy', },
  { number: 1, text: 'Completed course through HyperionDev', },
  { number: 0, text: 'Projects on Behance' },
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Accomplishments
    </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
