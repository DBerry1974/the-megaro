import React from 'react';
import kingsCrosstargetareas from './kingsCrosstargetareas';

const HotelsKingsCrossTarget = () => {
  return (
    <div className="hotels-kings-cross max-w-7xl mx-auto px-4 py-10 bg-gray-900">
      <h2 className="text-3xl text-white font-bold mb-4">Kings Cross Hotel</h2>

      <h3 className="text-2xl text-white font-bold mb-4">Nearby landmarks and attractions</h3>
      <div className="lg:grid lg:grid-cols-4 gap-2">
        {kingsCrosstargetareas.map((town, index) => (
          <div key={`towns-${index}`}>
            {/* Update the href to include the town name */}
            <a href={`/hotels-kings-cross/${town.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-900 hover:bg-green-800 hover:text-white block p-2 bg-white">
            Kings Cross Hotel near {town.charAt(0).toUpperCase() + town.slice(1)}
</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelsKingsCrossTarget;
 