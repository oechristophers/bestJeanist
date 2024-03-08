// Only footer and header will be part of the layout, the rest will be in page
import React from 'react'
import { EmblaCarousel } from './MainCarousel';

export default function Main() {
  return (
    <div className="min-h-screen items-center justify-center flex my-auto bg-white ">
      <EmblaCarousel/>
      
    </div>
  );
}
