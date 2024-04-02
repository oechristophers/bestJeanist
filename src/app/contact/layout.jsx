
import React from 'react'
import LocationBar from '../components/LocationBar';


// export const metadata = {
//   title: "Ekene contact page",
// };

export default function layout({children}) {
  return (
    <div>
      <div className="text-[.7rem] md:text-[.8rem] uppercase">
        <LocationBar currentUrl="/contact" />
      </div>
      {children}
    </div>
  );
}
