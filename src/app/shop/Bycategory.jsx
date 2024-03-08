import Link from 'next/link'
import React from 'react'

export default function Bycategory({title}) {
  return (
    <li className="border-t">
      <Link href={`/shop/category/${title.toLowerCase().split(" ").join("-")}`}>
        {title}
      </Link>
    </li>
  );
}
