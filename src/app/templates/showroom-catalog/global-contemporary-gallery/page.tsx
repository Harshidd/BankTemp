"use client";

import React from 'react';
import Template from '@/../template-bank/showroom-catalog/global-contemporary-gallery/working-template/page';
import MinimalBackLink from '@/components/MinimalBackLink';

export default function GlobalContemporaryGalleryPage() {
  return (
    <div className="relative min-h-screen">
      <MinimalBackLink />
      <div className="overflow-x-hidden">
        <Template />
      </div>
    </div>
  );
}
