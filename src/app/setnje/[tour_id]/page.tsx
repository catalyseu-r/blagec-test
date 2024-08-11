export const runtime = 'edge';

import React from 'react';

interface TourPageProps {
  params: { tour_id: string };
}

const TourPage: React.FC<TourPageProps> = ({ params }) => {
  const { tour_id } = params;

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src={`https://setnja-blagec-${tour_id}.netlify.app`}
        style={{ width: '100%', height: '100%', border: 'none' }}
        allowFullScreen
      />
    </div>
  );
};

export default TourPage;
