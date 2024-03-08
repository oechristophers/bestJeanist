import Link from 'next/link';
import React from 'react'

export default function Bygender({title}) {
  return (
    <li className='border-t'>
      <Link href={`/shop/genderSort/${title.toLowerCase().split(" ").join("-")}`}>
        {title}
      </Link>
    </li>
  );
}
