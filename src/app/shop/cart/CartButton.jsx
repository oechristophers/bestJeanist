import React, { useEffect } from 'react'
import { useCart } from './Cart';

export default function CartButton({prodCard, params,product}) {
      const { quant, setQuant } = useCart();
      const { addToCart } = useCart();
       function handleQuant(e) {
         setQuant(e.target.value);
       }

         useEffect(() => {
           setQuant(1); // this is to Reset quant state to default value
         }, [params.product]);

  return (
    <section>
   <div className="flex pb-6">
              <p>Quantity: &nbsp;</p>
              <span className="">
              
                <input
                  type="number"
                  name="quant"
                  id="quant"
                  min={1}
                  max={prodCard.stock}
                  value={quant}
                  className="bg-green-300"
                  onChange={handleQuant}
                />
              </span>
            </div>
            <div>
              <button
                onClick={() => addToCart(prodCard)}
                className="border-2 w-[70%] h-14 mb-5"
              >
                Add to cart
              </button>
            </div>
            </section>
  )
}
