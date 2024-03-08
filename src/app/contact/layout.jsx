
import React from 'react'
import LocationBar from '../components/LocationBar';


// export const metadata = {
//   title: "Ekene contact page",
// };

export default function layout({children}) {
  return (
    <div>
      <LocationBar currentUrl="/contact" />
      {children}
    </div>
  );
}
