"use client";

import React from 'react';
import Template from '@/../template-bank/local-business/seo-hvac-service/working-template/page';
import MinimalBackLink from '@/components/MinimalBackLink';

export default function SeoHvacServicePage() {
  return (
    <div className="relative min-h-screen">
      <MinimalBackLink />
      <div className="overflow-x-hidden">
        <Template />
      </div>
    </div>
  );
}
