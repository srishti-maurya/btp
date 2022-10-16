import React from 'react';
import {
  Nav,
  SectionHero,
  Footer,
  SectionSolution,
  SectionShowcase,
  SectionTarget,
  SectionRelation,
  SectionGoals,
  SectionTools,
  SectionUsers,
  SectionConnect,
} from '../components';

export const Home = () => {
  return (
    <>
      <Nav />
      <SectionHero />
      <SectionSolution />
      <SectionShowcase />
      <SectionTarget />
      <SectionRelation />
      <SectionGoals />
      <SectionTools />
      <SectionUsers />
      <SectionConnect />
      <Footer />
    </>
  );
};
