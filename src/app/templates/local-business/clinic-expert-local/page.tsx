"use client";

import React from 'react';
import Template from '@/../template-bank/local-business/clinic-expert-local/working-template/page';
import MinimalBackLink from '@/components/MinimalBackLink';

export default function ClinicExpertPage() {
  return (
    <div className="relative min-h-screen">
      <MinimalBackLink />
      <div className="overflow-x-hidden">
        <Template />
      </div>
    </div>
  );
}
