"use client"
import React, { useState } from "react";

     
export default function layout({ children })
 {const [addedItems, setAddedItems] = useState([]);
  return (
    <div addedItems={addedItems}>
      {children}
    </div>
  );
}
