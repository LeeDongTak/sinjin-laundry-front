import System from '@/components/laundry-system/System';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '세탁 시스템 | 신진세탁기업',
  description: '세탁 시스템',
};

const LaundrySystemPage = () => {
  return (
    <div>
      <div>세탁 시스템</div>
      <System />
    </div>
  );
};

export default LaundrySystemPage;
