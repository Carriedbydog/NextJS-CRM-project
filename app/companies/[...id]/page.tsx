import Header from '@/app/components/Header';
import React from 'react';

interface pageProps {
  params: { id: string[] };
}

const page = ({ params }: pageProps) => {
  return (
    <>
      <Header>Companies ({String(params.id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
};

export default page;
