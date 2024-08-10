'use client';

// app/setnje/[tour_id]/page.tsx

import { useRouter } from 'next/navigation';
import React from 'react';

interface TourPageProps {
  params: { tour_id: string };
}

const TourPage: React.FC<TourPageProps> = ({ params }) => {
  const { tour_id } = params;
  const router = useRouter();

  // Provjeri da li tour_id postoji i da li je valjan
  if (!tour_id || !/^[\w-]+$/.test(tour_id)) {
    // Ako nije, preusmjeri na 404 ili neku drugu stranicu
    router.push('/404');
    return null;
  }

  // Generiraj URL do virtualne šetnje
  const tourUrl = `/setnja_1/index.html`;

  console.log('TOUR', tourUrl);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe src={tourUrl} style={{ width: '100%', height: '100%', border: 'none' }} allowFullScreen />
    </div>
  );
};

export default TourPage;
