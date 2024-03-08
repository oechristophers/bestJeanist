import React from 'react'
import { CartProvider } from './Cart'

export default function layout({children}) {
  return (
    <div>
<CartProvider>
    {children}
</CartProvider>
    </div>
  )
}
