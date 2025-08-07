'use client';

import React from 'react';
import { ShadcnNavbar } from './shadcn-navbar';
import { ShadcnFooter } from './shadcn-footer';
import { Toaster } from './toaster';

export function ShadcnLayout({ children, transparentNav = false }) {
  return (
    <div className="flex min-h-screen flex-col">
      <ShadcnNavbar transparent={transparentNav} />
      <main className="flex-1">{children}</main>
      <ShadcnFooter />
      <Toaster />
    </div>
  );
} 