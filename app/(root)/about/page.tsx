import About from '@/components/about/About';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '회사소개 | 신진세탁기업',
  description: '회사소개',
};

const AboutPage = () => {
  return (
    <div>
      <div>회사소개</div>
      <About />
    </div>
  );
};

export default AboutPage;
