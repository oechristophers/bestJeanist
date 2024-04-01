import React from "react";
import Blog from "./Blog";
import LocationBar from "../components/LocationBar";

export const blogPosts = [
  {
    id: 1,
    title: "Unveiling the Latest Denim Trends for Spring 2024",
    image: "/blogImg.webp",
    blog_story:
      "As the seasons change, so do the trends in denim fashion. At BestJeanist, we're excited to introduce our latest collection for Spring 2024, showcasing a fusion of timeless styles with modern twists. From classic blue jeans to vibrant colored denim, our new releases cater to every taste and preference. Our design team has meticulously crafted each piece to ensure the perfect fit and comfort, making them wardrobe essentials for both men and women. Stay ahead of the fashion curve with BestJeanist this spring!",
    blogger_name: "FashionForward123",
  },
  {
    id: 2,
    title: "BestJeanist Denim: All Time Red Carpet Favorite",
    image: "/blogImg5.webp",
    blog_story:
      "When it comes to red carpet glamour, celebrities trust BestJeanist to make a statement. Our premium denim pieces have graced the prestigious events of Hollywood, with A-listers flaunting our designs with style and sophistication. From sleek tailored jeans to elegant denim dresses, our collections have garnered attention for their impeccable craftsmanship and attention to detail. Join the ranks of the fashion elite and experience the allure of BestJeanist on your next red carpet moment!",
    blogger_name: "StarStyleInsider",
  },
  {
    id: 3,
    title: "Celebrity Spotting: BestJeanist Denim Edition",
    image: "/blogImg4.webp",
    blog_story:
      "It's no secret that celebrities love BestJeanist! From international icons to rising stars, our denim pieces have found their way into the closets of the rich and famous. Whether spotted on the streets of New York or at exclusive events in LA, our jeans, jackets, and shirts have become staples in celebrity wardrobes. Join the ranks of your favorite stars and elevate your style with BestJeanist – the choice of Hollywood royalty!",
    blogger_name: "CelebStyleWatcher",
  },
  {
    id: 4,
    title: "BestJeanist Motion Redefining Denim for All",
    image: "/blogImg6.webp",
    blog_story:
      "At BestJeanist, inclusivity is at the heart of everything we do. We believe that denim should be for everyone, regardless of gender or body type. That's why our collections feature a diverse range of styles and sizes, catering to men, women, and everyone in between. From classic cuts to trendy silhouettes, our denim pieces are designed to celebrate individuality and empower self-expression. Join the BestJeanist movement and embrace denim that's made for you!",
    blogger_name: "InclusiveFashionista",
  },
  {
    id: 5,
    title: "BestJeanist: Making Headlines in Fashion Magazines",
    image: "/blogImg2.webp",
    blog_story:
      "In the world of fashion, BestJeanist is making waves with its innovative denim creations. Featured prominently in leading fashion magazines, our brand has become synonymous with quality, style, and versatility. From Vogue to Elle, critics and fashionistas alike have praised our collections for their trendsetting designs and inclusive approach to denim fashion. Join the buzz and discover why BestJeanist is the go-to choice for fashion-forward individuals everywhere!",
    blogger_name: "FashionistaGuru",
  },
  {
    id: 6,
    title: "Behind the Seams: Crafting Quality Denim at BestJeanist",
    image: "/blogImg7.png",
    blog_story:
      "Ever wondered what goes into making the perfect pair of jeans? At BestJeanist, it's all about craftsmanship, quality, and attention to detail. From sourcing the finest denim fabrics to precision stitching and finishing touches, our artisans pour their expertise and passion into every garment. Each piece undergoes rigorous quality control to ensure durability and comfort, so you can look and feel your best with BestJeanist. Experience the artistry behind our denim creations and discover the difference for yourself!",
    blogger_name: "DenimEnthusiast",
  },
];

export default function page() {
  return (
    <div className="">
      <LocationBar currentUrl='/blogs'/>
      <section>
        <h1 className="text-center text-[2rem] mt-10 ">BestJeanist World</h1>
      </section>
      
      <Blog />
    </div>
  );
}
