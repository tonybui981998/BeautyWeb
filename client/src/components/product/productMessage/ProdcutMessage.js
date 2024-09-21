import React, { useEffect, useState } from "react";
import "./ProductMessage.scss";

const ProdcutMessage = ({ headername }) => {
  const [tittle, settittle] = useState("");
  const [message, setMessage] = useState("");
  const checkLocation = () => {
    if (headername === "serum") {
      settittle("Buy Serum – 100% Authentic Skincare Products");
      setMessage(
        "Serum, also called skin essence, is a highly concentrated skincare product that can contain up to 70% active ingredients, about 10 times more than a regular cream. It comes in water-based or oil-based forms. Serums were developed after research showed that creams only affect the epidermis and dermis layers, while serums can penetrate deeper to address issues like wrinkles, dark spots, acne, and sagging. Their light texture, made of small molecules, allows them to deliver nutrients more effectively and quickly, making them a smart choice for long-term skin health. Serums can be used at any age but don’t replace day or night creams, which protect and nourish the skin in other ways. For best results, choose a serum based on your skin’s needs—like amino acids and proteins to help with wrinkles or sagging. Apply it at night after toner, and always follow up with a moisturizer to lock in the benefits and keep your skin hydrated."
      );
    } else if (headername === "moisturizing") {
      settittle("Buy moisturizing");
      setMessage(
        "Lotion is an essential step in skincare, typically lighter than creams and mainly used for moisturizing. Some Japanese brands use the term Lotion to refer to a product similar to toner, which has led to confusion between lotion and toner. To avoid this, check the skincare routine from the brand—if lotion comes right after cleansing, it likely acts as a toner. Korean lotions, on the other hand, are lighter than creams but thicker than water, making them ideal for summer as they absorb quickly without leaving a heavy or greasy feeling. The market offers a wide range of lotions, so research is key to finding one that suits your skin. Budget is also an important factor in choosing skincare, so it's smart to pick products from reputable suppliers to ensure quality and peace of mind."
      );
    } else if (headername === "removal") {
      settittle("Buy 100% Authentic Makeup Removers");
      setMessage(
        "Makeup removers are typically split into face products and separate ones for eyes and lips because the skin there is thinner and more sensitive. Eye makeup removers are needed for waterproof products, while face removers are stronger for thicker makeup. Choose a remover based on your skin type—oily, dry, sensitive, or acne-prone—and in forms like oil, milk, or water-based. Micellar Water is a popular choice that works for both face and eyes, using micelles to gently lift dirt and makeup while keeping skin soft. For minimal makeup, use an eye and lip remover. For full makeup, micellar water can clean everything. After use, rinse your face, follow with a foaming cleanser, and pat dry gently to avoid sagging."
      );
    }
  };
  useEffect(() => {
    checkLocation();
  }, [headername]);
  return (
    <div className="product-message">
      <div className="line"></div>
      <div className="tittle">{tittle}</div>
      <div className="message">{message}</div>
    </div>
  );
};

export default ProdcutMessage;
