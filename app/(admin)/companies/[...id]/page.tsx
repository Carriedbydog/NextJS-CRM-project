'use client';
import Header from '@/app/components/Header';
import { notFound } from 'next/navigation';
import React, { useEffect } from 'react';

interface pageProps {
  params: { id: string };
}

const page = ({ params }: pageProps) => {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);
  return (
    <>
      <Header>Company ({params.id})</Header>
    </>
  );
};

export default page;
