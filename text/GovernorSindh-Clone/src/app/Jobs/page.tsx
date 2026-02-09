"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import Footer from '@/components/Footer';

const JobsPage: FC = () => {
    return (
      <div className="min-h-screen flex flex-col">
    
        <main className="flex-grow flex items-center justify-center">
          <p className="text-black text-2xl font-semibold ">Jobs/ Internships coming soon.</p>
        </main>
      </div>
    );
  };
  
  export default JobsPage;