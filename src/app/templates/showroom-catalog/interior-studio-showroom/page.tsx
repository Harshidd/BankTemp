"use client";

import React from 'react';
import Template from '@/../template-bank/showroom-catalog/interior-studio-showroom/working-template/page';
import MinimalBackLink from '@/components/MinimalBackLink';

export default function InteriorStudioShowroomPage() {
  return (
    <div className="relative min-h-screen">
      <MinimalBackLink />
      <div className="overflow-x-hidden">
        <Template />
      </div>
    </div>
  );
}
