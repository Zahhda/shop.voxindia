"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import { useAppContext } from "@/context/AppContext";
import { ChevronDown, ChevronUp } from "lucide-react";

const COLOR_HEX = {
  White: "#ffffff",
  Grey: "#808080",
  Anthracite: "#293133",
  Black: "#000000",
  Mocca: "#837060",
  Natural: "#E1C699",
  "Natural Black": "#1D1D1B",
  Chocolate: "#7B3F00",
};

const accordionData = [
   {
    id: 1,
    question: "What are VOX Linerio Slat Panels?",
    answer:
      "VOX Linerio Slat Panels are decorative wall panels designed to enhance interior spaces with depth, warmth, and sophistication. They come in three variants—S-Line, M-Line, and L-Line—each differing in the width and depth of the slats. These panels are made from polystyrene, a lightweight and durable material that is 100% recyclable."
  },
  {
    id: 2,
    question: "What are the differences between S-Line, M-Line, and L-Line panels?",
    answer:
      "S-Line: Features narrow slats, providing a subtle texture suitable for minimalist designs.\nM-Line: Offers medium-width slats, balancing subtlety and prominence.\nL-Line: Comprises wide slats, making a bold statement and adding significant depth to walls."
  },
  {
    id: 3,
    question: "In which colors are Linerio panels available?",
    answer:
      "Linerio panels are available in various shades, including Natural, Mocca, Chocolate, White, Grey, Black, and Anthracite."
  },
  {
    id: 4,
    question: "Can Linerio panels be installed in bathrooms or kitchens?",
    answer:
      "Yes, Linerio panels can be installed in damp areas like bathrooms and kitchens. However, they should not be exposed to direct contact with water or installed in areas with temperatures exceeding 60°C, such as saunas or near cookers."
  },
  {
    id: 5,
    question: "How are Linerio panels installed?",
    answer:
      "Linerio panels are designed for easy installation. They can be mounted using adhesive and cut to size using a saw or jigsaw. Installation can be done vertically, horizontally, or diagonally. Visit shop.voxindia.co for an installation guide or contact VOX technicians at +91 9528500500 for complex designs."
  },
  {
    id: 6,
    question: "Do Linerio panels improve room acoustics?",
    answer:
      "Yes, the spatial structure of Linerio panels helps to soundproof interiors by eliminating reverberation and echo, especially in larger rooms."
  },
  {
    id: 7,
    question: "Are Linerio panels environmentally friendly?",
    answer:
      "Absolutely. Linerio panels are made from polystyrene, which is 100% recyclable. This makes them an eco-friendly choice for interior wall cladding."
  },
  {
    id: 8,
    question: "What are the dimensions of a single Linerio panel?",
    answer:
      "Each Linerio panel measures 3050 mm in length. The width and thickness vary by type:\nS-Line: 122 mm wide, 12 mm thick\nM-Line: 122 mm wide, 12 mm thick\nL-Line: 122 mm wide, 21 mm thick"
  },
  {
    id: 9,
    question: "Can Linerio panels be used on ceilings?",
    answer:
      "Yes, Linerio panels are versatile and can be installed on both walls and ceilings, allowing for cohesive interior designs."
  },
  {
    id: 10,
    question: "How do I maintain and clean Linerio panels?",
    answer:
      "Linerio panels are easy to maintain. Use a mild detergent and a soft cloth for cleaning. Avoid strong detergents, bleaching agents, solvents, strong acids/bases, or abrasives."
  },
  {
    id: 11,
    question: "Are VOX Linerio Slat Panels suitable for Indian weather conditions?",
    answer:
      "Yes, the panels are made from high-quality polystyrene that is resistant to moisture, heat, and humidity—suitable for Indian climates. They can be used in interiors and semi-humid areas like covered balconies."
  },
  {
    id: 12,
    question: "What are the best rooms to install VOX Linerio Panels in a home?",
    answer:
      "Ideal for living rooms, bedrooms, hallways, offices, and feature walls. Their acoustic benefits suit home theaters and study areas, while moisture resistance makes them suitable for kitchens and covered balconies."
  },
  {
    id: 13,
    question: "Can I use VOX Linerio Panels for commercial interiors?",
    answer:
      "Absolutely. They're widely used in cafes, salons, office lobbies, and showrooms due to their modern look, durability, and easy maintenance."
  },
  {
    id: 14,
    question: "How do VOX Linerio Panels compare to traditional wooden wall panels?",
    answer:
      "VOX Linerio Panels are lightweight, moisture-resistant, and low-maintenance. Unlike wood, they don’t warp, crack, or fade, making them better for humid conditions."
  },
  {
    id: 15,
    question: "Are VOX Linerio Panels customizable in terms of color or finish?",
    answer:
      "VOX offers panels in finishes like Natural Oak, Mocca, Chocolate, White, Grey, and Anthracite. While slat sizes (S, M, L) are fixed, you can choose a finish to match your decor."
  },
  {
    id: 16,
    question: "What is the estimated delivery time for VOX Linerio Slat Panels?",
    answer:
      "Delivery typically takes 8 to 14 working days from order confirmation. Orders ship after 24 hours, and cancellation is not possible post that."
  },
  {
    id: 17,
    question: "What should I do if my VOX Linerio panels arrive damaged?",
    answer:
      "Contact us at +91 9528500500 within 48 hours of delivery. Email photos of the damage and packaging to customercare@voxindia.co with your order details."
  },
  {
    id: 18,
    question: "Is there a warranty on VOX Linerio Panels?",
    answer:
      "Yes, there is a 2-year manufacturer’s warranty against defects in material and workmanship."
  },
  {
    id: 19,
    question: "Are shipping charges included in the product price?",
    answer:
      "Yes, VOX India offers Free Shipping across India on all orders placed via voxindia.co."
  },
  {
    id: 20,
    question: "How will Installation of VOX Linerio Panels work after delivery? Are there extra Installation Charges?",
    answer:
      "VOX India provides Free Installation across India for all orders from voxindia.co. For complex installations, accessories like Linerio Trims (sold separately) may be required. Contact +91 9528500500 post-order for more info."
  }
];

function Accordion() {
  const [activeIndex, setActiveIndex] = React.useState(null);
  const [visibleCount, setVisibleCount] = React.useState(6);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);

    if (index >= visibleCount - 3 && visibleCount < accordionData.length) {
      const newVisible = Math.min(visibleCount + 3, accordionData.length);
      setVisibleCount(newVisible);
    }
  };

  const visibleData = accordionData.slice(0, visibleCount);

  return (
    <div className="max-w-full mt-10 space-y-4">
      {visibleData.map((item, index) => (
        <div key={item.id} className="border-b border-gray-200 w-full">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between w-full p-4 bg-gray-100 hover:bg-gray-200 text-left text-lg font-medium text-gray-800 transition-all"
            type="button"
          >
            {item.question}
            {activeIndex === index ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {activeIndex === index && (
            <div className="p-4 text-gray-600 bg-white whitespace-pre-line transition-all duration-300">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const { products, addToCart } = useAppContext();

  const [productData, setProductData] = useState(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (products && products.length) {
      const product = products.find((p) => p._id === id);
      setProductData(product || null);
      setSelectedVariantIndex(0);
      setSelectedColorIndex(0);
      setQuantity(1);
      const firstColorImage = product?.variants?.[0]?.colors?.[0]?.image;
      setMainImage(firstColorImage || product?.image?.[0] || "");
    }
  }, [id, products]);

  if (!productData) return <Loading />;

  const variants = productData.variants || [];
  const currentVariant = variants[selectedVariantIndex] || null;
  const currentColors = currentVariant?.colors || [];
  const currentColor = currentColors[selectedColorIndex] || null;

  const displayPrice =
    currentColor?.price ?? productData.offerPrice ?? productData.price ?? 0;

  const discountPercent =
    productData.price &&
    productData.offerPrice &&
    productData.price > productData.offerPrice
      ? Math.round(
          ((productData.price - productData.offerPrice) / productData.price) * 100
        )
      : 0;

  const imageList = productData.image || [];

  const selectVariant = (index) => {
    setSelectedVariantIndex(index);
    setSelectedColorIndex(0);
    setQuantity(1);
    const defaultColorImage = variants[index]?.colors?.[0]?.image;
    setMainImage(defaultColorImage || productData.image?.[0] || "");
  };

  const selectColor = (index) => {
    setSelectedColorIndex(index);
    setQuantity(1);
    const colorImage = currentColors[index]?.image;
    if (colorImage) {
      setMainImage(colorImage);
    } else {
      setMainImage(productData.image?.[0] || "");
    }
  };

  const decrementQty = () => {
    setQuantity((q) => Math.max(1, q - 1));
  };

  const incrementQty = () => {
    setQuantity((q) => q + 1);
  };

  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: Main Image + Thumbnails */}
          <div>
            <div
              className="overflow-hidden rounded-lg bg-gray-50 relative w-full h-[450px]"
              style={{ minHeight: "450px" }}
            >
              {mainImage ? (
                <Image
                  key={mainImage}
                  src={mainImage}
                  alt={productData.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover transition-opacity duration-500 ease-in-out"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                  No Image Available
                </div>
              )}
            </div>

            {/* Thumbnails below main image */}
            <div className="flex space-x-4 mt-4 overflow-x-auto scrollbar-hide">
              {imageList.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={`border rounded-lg overflow-hidden flex-shrink-0 cursor-pointer ${
                    mainImage === img ? "border-orange-500" : "border-transparent"
                  }`}
                  type="button"
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product details */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-semibold">{productData.name}</h1>
            <p className="text-lg text-gray-500 mb-4">
              Color: {currentColor?.name ?? "N/A"}
            </p>

            {/* Variant selector */}
            <div className="flex space-x-4 mb-6">
              {variants.map((variant, idx) => (
                <button
                  key={idx}
                  onClick={() => selectVariant(idx)}
                  className={`py-2 px-4 border rounded-md font-semibold ${
                    selectedVariantIndex === idx
                      ? "bg-black text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  type="button"
                >
                  {variant.name}
                </button>
              ))}
            </div>

            {/* Color selector */}
            <div className="flex space-x-4 mb-6 items-center">
              <span className="font-semibold mr-4">Color:</span>
              {currentColors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => selectColor(idx)}
                  title={color.name}
                  className={`w-10 h-10 rounded-full border-2 border-black flex items-center justify-center cursor-pointer ${
                    selectedColorIndex === idx ? "ring-2 ring-blue-600" : ""
                  }`}
                  style={{ backgroundColor: COLOR_HEX[color.name] || "#ccc" }}
                  type="button"
                >
                  <div className="w-6 h-6 rounded-full" />
                </button>
              ))}
            </div>

            {/* Quantity */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="font-semibold">Quantity:</span>
              <button
                onClick={decrementQty}
                className="w-8 h-8 rounded border border-gray-400 text-2xl flex items-center justify-center select-none"
                type="button"
              >
                −
              </button>
              <span className="text-xl">{quantity}</span>
              <button
                onClick={incrementQty}
                className="w-8 h-8 rounded border border-gray-400 text-2xl flex items-center justify-center select-none"
                type="button"
              >
                +
              </button>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-semibold">₹{displayPrice.toFixed(2)}</span>
              {discountPercent > 0 && (
                <>
                  <span className="text-gray-500 line-through text-lg">
                    ₹{productData.price.toFixed(2)}
                  </span>
                  <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">
                    {discountPercent}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Price info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded shadow text-center">
                <div className="text-xs text-gray-600 mb-1">Per sq.ft</div>
                <div className="font-semibold text-lg">
                  ₹{productData.perSqFtPrice?.toFixed(2) ?? "N/A"}
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded shadow text-center">
                <div className="text-xs text-gray-600 mb-1">Per panel</div>
                <div className="font-semibold text-lg">
                  {productData.perPanelSqFt?.toFixed(3) ?? "N/A"} sq.ft
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(productData._id, quantity)}
              className="w-full py-3.5 bg-black text-white rounded hover:bg-gray-900 transition"
              type="button"
            >
              <span className="inline-flex items-center justify-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.97-1.58L23 6H6"></path>
                </svg>
                <span>Add to Cart</span>
              </span>
            </button>

            {/* Why Choose Us Section */}
            <div className="mt-10 border-t pt-6">
              <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
              <div className="flex justify-around text-center space-x-8">
                <div className="flex flex-col items-center max-w-[150px]">
                  {/* Wrench icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-8 w-8 mb-2 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.7 8.7a2.828 2.828 0 10-4 4L6 17v3h3l4.7-4.7a2.828 2.828 0 000-4z"
                    />
                  </svg>
                  <p className="text-sm">Free Installation</p>
                </div>
                <div className="flex flex-col items-center max-w-[150px]">
                  {/* Delivery truck icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-8 w-8 mb-2 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 9h13l4 4v5H3v-9zM16 3h5v5m-1-1l-4-4M7 21a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z"
                    />
                  </svg>
                  <p className="text-sm">Free Shipping PAN India</p>
                </div>
                <div className="flex flex-col items-center max-w-[150px]">
                  {/* Shield check icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-8 w-8 mb-2 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3c2.485 0 4.5 1.567 4.5 4.5v5.25c0 3.75-2.985 6.75-4.5 6.75S7.5 16.5 7.5 12.75V7.5C7.5 4.567 9.515 3 12 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  <p className="text-sm">2 Years Warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion FAQ below product details */}
        <Accordion />
      </div>
      <Footer />
    </>
  );
}
