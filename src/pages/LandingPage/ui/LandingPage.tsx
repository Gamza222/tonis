import React from 'react';
import cls from './LandingPage.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';

import { Section1 } from 'blocks/Landing/Section1';
import { Section2 } from 'blocks/Landing/Section2';
import { Section3 } from 'blocks/Landing/Section3';
import { Section4 } from 'blocks/Landing/Section4';
import { Section5 } from 'blocks/Landing/Section5';
import { Section6 } from 'blocks/Landing/Section6';
import { Section7 } from 'blocks/Landing/Section7';
import { Section8 } from 'blocks/Landing/Section8';
import { Footer } from 'blocks/Landing/Footer';

interface LandingPageProps {
  className?: string;
}

const LandingPage = ({ className }: LandingPageProps) => {
  return (
    <div className={classNames(cls.LandingPage, {}, [])}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
    </div>
  );
};

export default LandingPage;
