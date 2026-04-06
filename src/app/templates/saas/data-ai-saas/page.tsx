"use client";

import React from 'react';
import Template from '@/../template-bank/saas/data-ai-saas/working-template/page';
import MinimalBackLink from '@/components/MinimalBackLink';

export default function ShowcasePage() {
  return (
    <div className="relative min-h-screen">
      <MinimalBackLink />
      <div className="overflow-x-hidden">
        <Template />
      </div>
    </div>
  );
}
