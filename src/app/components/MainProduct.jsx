import React from 'react'

const denimData = [
  {
    id: 1,
    name: "Classic Blue Jeans",
    category: "Pants",
    price: 49.99,
    description:
      "Elevate your wardrobe with our Classic Blue Jeans, a timeless staple that effortlessly combines style and comfort. Crafted from premium denim fabric, these jeans feature a classic five-pocket design and a versatile mid-rise waist. Whether you're dressing up for a night out or keeping it casual on the weekend, these jeans are sure to become your go-to choice. Available in a range of sizes including men's, women's, and unisex, finding your perfect fit has never been easier.",
    tags: ["denim", "jeans", "pants", "unisex"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Vintage Denim Jacket",
    category: "Tops",
    price: 79.99,
    description:
      "Step into retro-inspired style with our Vintage Denim Jacket, a must-have addition to any wardrobe. Crafted from high-quality denim with a distressed finish, this jacket exudes effortless cool and timeless appeal. Layer it over your favorite tee for a laid-back look or pair it with a dress for a touch of edge. Available in both men's and women's sizes, everyone can rock this iconic piece.",
    tags: ["denim", "jacket", "tops", "unisex"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Denim Cargo Shorts",
    category: "Shorts",
    price: 34.99,
    description:
      "Stay cool and comfortable during the warmer months with our Denim Cargo Shorts. Made from durable denim fabric, these shorts feature multiple cargo pockets for added functionality. The relaxed fit and adjustable drawstring waist ensure a comfortable fit, while the classic denim wash adds a timeless appeal. Available in both men's and women's sizes, these shorts are a versatile addition to any summer wardrobe.",
    tags: ["denim", "shorts", "unisex"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Slim Fit Denim Jeans",
    category: "Pants",
    price: 54.99,
    description:
      "Elevate your denim collection with our Slim Fit Denim Jeans, designed for both style and comfort. Crafted from premium denim fabric, these jeans feature a slim fit through the hips and thighs for a modern silhouette. The mid-rise waist and tapered legs create a flattering look that's perfect for any occasion. Available in both men's and women's sizes, these jeans are a wardrobe essential for effortless style.",
    tags: ["denim", "jeans", "pants", "unisex"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Denim Bomber Jacket",
    category: "Outerwear",
    price: 89.99,
    description:
      "Add a touch of urban-cool to your look with our Denim Bomber Jacket, a modern twist on a classic style. Made from soft denim fabric, this jacket features a relaxed fit with ribbed cuffs and hem for a sporty vibe. The zip-up front and side pockets add functionality, while the classic denim wash ensures versatility. Available in both men's and women's sizes, this jacket is a must-have for your outerwear collection.",
    tags: ["denim", "jacket", "outerwear", "unisex"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Denim Midi Skirt",
    category: "Skirts",
    price: 59.99,
    description:
      "Make a statement with our Denim Midi Skirt, a versatile piece that's perfect for any occasion. Crafted from soft denim fabric, this skirt features a classic midi length and a flattering A-line silhouette. The high-rise waist and button-up front add a touch of vintage-inspired charm, while the frayed hem adds a modern edge. Available in women's sizes, this skirt pairs perfectly with a tucked-in blouse or tee for effortless chic.",
    tags: ["denim", "skirt", "women"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 7,
    name: "Denim Cargo Jacket",
    category: "Outerwear",
    price: 79.99,
    description:
      "Stay stylish and functional with our Denim Cargo Jacket, a versatile layering piece for any season. Made from durable denim fabric, this jacket features multiple cargo pockets for added storage and utility. The relaxed fit and adjustable waist ensure a comfortable and customizable fit, while the classic denim wash adds a timeless appeal. Available in both men's and women's sizes, this jacket is a wardrobe essential.",
    tags: ["denim", "jacket", "outerwear", "unisex"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Denim Boyfriend Shirt",
    category: "Tops",
    price: 64.99,
    description:
      "Add a laid-back vibe to your look with our Denim Boyfriend Shirt, perfect for effortless style on casual days. Made from soft denim fabric, this shirt features a relaxed fit with a longer length for added coverage. The button-up front and chest pockets add functionality, while the classic denim wash ensures versatility. Available in both men's and women's sizes, this shirt is a wardrobe staple.",
    tags: ["denim", "shirt", "tops", "unisex"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 9,
    name: "Denim Culottes",
    category: "Pants",
    price: 49.99,
    description:
      "Stay on-trend with our Denim Culottes, a stylish alternative to traditional jeans or skirts. Made from soft denim fabric, these culottes feature a wide-leg silhouette and a flattering high-rise waist. The cropped length and relaxed fit offer a modern look that's perfect for any occasion. Available in women's sizes, these culottes are a versatile addition to your wardrobe.",
    tags: ["denim", "pants", "women"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 10,
    name: "Denim Blazer",
    category: "Outerwear",
    price: 99.99,
    description:
      "Elevate your workwear wardrobe with our Denim Blazer, a sophisticated yet versatile piece that transitions seamlessly from the office to after-hours. Made from high-quality denim fabric, this blazer features a tailored fit with a single-button closure and notched lapels. The structured silhouette and classic denim wash add timeless appeal. Available in both men's and women's sizes, this blazer is a wardrobe essential for polished style.",
    tags: ["denim", "blazer", "outerwear", "unisex"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 11,
    name: "Denim Wide-Leg Pants",
    category: "Pants",
    price: 69.99,
    description:
      "Make a statement with our Denim Wide-Leg Pants, a chic and comfortable option for any occasion. Crafted from soft denim fabric, these pants feature a high-rise waist and a wide-leg silhouette for a flattering look. The relaxed fit and cropped length add a modern touch, while the classic denim wash ensures versatility. Available in women's sizes, these pants are a stylish addition to your wardrobe.",
    tags: ["denim", "pants", "women"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 12,
    name: "Denim Trench Coat",
    category: "Outerwear",
    price: 119.99,
    description:
      "Stay stylish in any weather with our Denim Trench Coat, a timeless outerwear staple that's perfect for layering. Made from durable denim fabric, this trench coat features a double-breasted front and a belted waist for a flattering fit. The classic collar and storm flap add a sophisticated touch, while the longline silhouette provides ample coverage. Available in both men's and women's sizes, this trench coat is a must-have for your wardrobe.",
    tags: ["denim", "trench coat", "outerwear", "unisex"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 13,
    name: "Skinny Stretch Jeans",
    category: "Pants",
    price: 59.99,
    description:
      "Get the perfect blend of style and comfort with our Skinny Stretch Jeans. Crafted from premium denim with a hint of stretch, these jeans offer a sleek silhouette without sacrificing mobility. The skinny fit and mid-rise waist create a flattering look that's versatile enough for any occasion. Available in a range of sizes for both men and women, finding your ideal pair has never been easier.",
    tags: ["denim", "jeans", "pants", "unisex"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 14,
    name: "Ripped Denim Shorts",
    category: "Shorts",
    price: 39.99,
    description:
      "Embrace laid-back style with our Ripped Denim Shorts, perfect for sunny days and warm nights. Made from soft denim fabric, these shorts feature distressed detailing for a casual, lived-in look. The mid-rise waist and relaxed fit ensure all-day comfort, while the classic five-pocket design adds functionality. Available in a range of sizes, these shorts are a summer wardrobe essential for everyone.",
    tags: ["denim", "shorts", "unisex"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 15,
    name: "High-Waisted Mom Jeans",
    category: "Pants",
    price: 54.99,
    description:
      "Rediscover vintage-inspired charm with our High-Waisted Mom Jeans, a modern take on a classic silhouette. Crafted from premium denim with a hint of stretch, these jeans offer a comfortable fit with a flattering high-rise waist. The relaxed fit through the hips and thighs adds a touch of retro flair, while the ankle-length hem creates a versatile look. Available in women's sizes, these jeans are a timeless addition to any wardrobe.",
    tags: ["denim", "jeans", "pants", "women"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 16,
    name: "Denim Button-Up Shirt",
    category: "Tops",
    price: 69.99,
    description:
      "Elevate your everyday style with our Denim Button-Up Shirt, a versatile piece that transitions seamlessly from work to weekend. Made from soft denim fabric, this shirt features a classic button-up design with a pointed collar and chest pocket. The relaxed fit and long sleeves offer all-day comfort, while the timeless indigo hue adds a touch of sophistication. Available in both men's and women's sizes, this shirt is a wardrobe essential for all.",
    tags: ["denim", "shirt", "tops", "unisex"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 17,
    name: "Distressed Denim Skirt",
    category: "Skirts",
    price: 49.99,
    description:
      "Add a touch of edge to your look with our Distressed Denim Skirt, a versatile piece that's perfect for any season. Crafted from high-quality denim, this skirt features distressed detailing and a frayed hem for a worn-in feel. The high-rise waist and A-line silhouette offer a flattering fit that's both comfortable and stylish. Available in women's sizes, this skirt pairs perfectly with your favorite tee or sweater for effortless chic.",
    tags: ["denim", "skirt", "women"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 18,
    name: "Slim Fit Denim Shirt",
    category: "Tops",
    price: 59.99,
    description:
      "Make a statement with our Slim Fit Denim Shirt, a modern essential for any wardrobe. Crafted from soft denim fabric, this shirt features a slim-fit silhouette with long sleeves and a pointed collar. The button-up design adds versatility, allowing you to dress it up or down with ease. Available in men's sizes, this shirt pairs perfectly with jeans for a classic double denim look.",
    tags: ["denim", "shirt", "tops", "men"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 19,
    name: "Baggy Boyfriend Jeans",
    category: "Pants",
    price: 64.99,
    description:
      "Add a relaxed vibe to your look with our Baggy Boyfriend Jeans, a modern twist on a classic silhouette. Made from premium denim with a hint of stretch, these jeans offer a comfortable fit with a relaxed, slouchy cut through the hips and thighs. The mid-rise waist and tapered legs create a flattering shape that's perfect for everyday wear. Available in women's sizes, these jeans are a must-have for laid-back style.",
    tags: ["denim", "jeans", "pants", "women"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 20,
    name: "Denim Overall Dress",
    category: "Dresses",
    price: 74.99,
    description:
      "Channel effortless cool with our Denim Overall Dress, a versatile piece that's perfect for any occasion. Crafted from durable denim fabric, this dress features adjustable shoulder straps and a relaxed fit for all-day comfort. The button-up front and front pockets add functionality, while the mini length creates a playful look. Available in women's sizes, this dress pairs perfectly with your favorite tee or blouse for a stylish ensemble.",
    tags: ["denim", "dress", "women"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 21,
    name: "Denim Cargo Pants",
    category: "Pants",
    price: 69.99,
    description:
      "Stay stylish and comfortable with our Denim Cargo Pants, a modern take on a classic design. Crafted from premium denim fabric, these pants feature multiple cargo pockets and a relaxed fit through the hips and thighs. The mid-rise waist and straight legs offer a flattering silhouette that's perfect for everyday wear. Available in men's sizes, these pants are a wardrobe essential for casual style.",
    tags: ["denim", "pants", "men"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 22,
    name: "Cropped Denim Jacket",
    category: "Tops",
    price: 79.99,
    description:
      "Add a touch of vintage-inspired charm to your look with our Cropped Denim Jacket, a versatile piece that's perfect for layering. Made from soft denim fabric, this jacket features a cropped silhouette and classic button-up design. The long sleeves and pointed collar add a timeless appeal, while the distressed detailing adds a modern edge. Available in women's sizes, this jacket pairs perfectly with dresses or high-waisted jeans for a chic ensemble.",
    tags: ["denim", "jacket", "tops", "women"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 23,
    name: "Denim Jogger Pants",
    category: "Pants",
    price: 49.99,
    description:
      "Stay comfortable and stylish with our Denim Jogger Pants, perfect for lounging or running errands. Made from soft denim fabric, these pants feature an elastic waistband with drawstring closure for a customized fit. The relaxed fit and tapered legs offer a modern silhouette that's effortlessly cool. Available in both men's and women's sizes, these joggers are a wardrobe essential for laid-back days.",
    tags: ["denim", "pants", "unisex"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 24,
    name: "Denim Vest",
    category: "Outerwear",
    price: 59.99,
    description:
      "Add a touch of edge to your look with our Denim Vest, a versatile layering piece that's perfect for any season. Made from durable denim fabric, this sleeveless vest features a classic button-up front and front pockets for added functionality. The relaxed fit and adjustable waist tabs offer a customizable silhouette that's effortlessly cool. Available in both men's and women's sizes, this vest is a must-have for your wardrobe.",
    tags: ["denim", "vest", "outerwear", "unisex"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 25,
    name: "Denim Mini Skirt",
    category: "Skirts",
    price: 44.99,
    description:
      "Add a feminine touch to your look with our Denim Mini Skirt, a versatile piece that's perfect for any occasion. Crafted from soft denim fabric, this skirt features a classic A-line silhouette and a frayed hem for a modern edge. The high-rise waist and mini length create a flattering look that's both chic and comfortable. Available in women's sizes, this skirt pairs perfectly with your favorite tee or blouse for effortless style.",
    tags: ["denim", "skirt", "women"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

export default function MainProduct() {
  return (
    <div>MainProduct</div>
  )
}
