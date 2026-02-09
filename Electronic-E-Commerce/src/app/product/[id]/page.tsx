"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { addToCart } from "@/utils/cart";

interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  discount?: number;
  rating: number;
  category: string;
  quantity: number;
  description: string;
  features: string[];
  specifications: Record<string, string>;
}

const productData: Record<string, Product> = {
  // Best Selling Products
  "best-1": {
    id: "best-1",
    image: "/bestproduct1.jpg",
    name: "The north coat",
    price: 260,
    discount: 20,
    rating: 88,
    category: "Gaming",
    quantity: 1,
    description: "Premium gaming headset with advanced audio technology and comfortable design.",
    features: [
      "High-quality audio with 7.1 surround sound",
      "Noise-canceling microphone",
      "RGB lighting effects",
      "Comfortable memory foam ear cushions",
      "Durable aluminum frame"
    ],
    specifications: {
      "Brand": "North Gaming",
      "Model": "NG-2000",
      "Color": "Black/Red",
      "Weight": "320g",
      "Connectivity": "USB 3.0",
      "Warranty": "2 years"
    }
  },
  "best-2": {
    id: "best-2",
    image: "/bestproduct2.jpg",
    name: "Gucci duffle bag",
    price: 960,
    discount: 12,
    rating: 75,
    category: "Accessories",
    quantity: 1,
    description: "Luxurious designer duffle bag crafted from premium materials.",
    features: [
      "Genuine leather exterior",
      "Spacious main compartment",
      "Multiple interior pockets",
      "Adjustable shoulder strap",
      "Signature Gucci pattern"
    ],
    specifications: {
      "Brand": "Gucci",
      "Material": "Leather",
      "Dimensions": "45x25x25cm",
      "Color": "Brown",
      "Style": "Casual",
      "Warranty": "1 year"
    }
  },
  "best-3": {
    id: "best-3",
    image: "/bestproduct3.jpg",
    name: "RGB liquid CPU Cooler",
    price: 232,
    discount: 10,
    rating: 95,
    category: "Computers",
    quantity: 1,
    description: "High-performance liquid cooling solution with RGB lighting.",
    features: [
      "240mm radiator",
      "RGB pump head",
      "High static pressure fans",
      "Copper cold plate",
      "Sleeved tubing"
    ],
    specifications: {
      "Brand": "CoolMaster",
      "Model": "ML240L",
      "Socket Support": "Intel/AMD",
      "Fan Speed": "800-2000 RPM",
      "Noise Level": "<30dB",
      "Warranty": "5 years"
    }
  },
  "best-4": {
    id: "best-4",
    image: "/bestproduct4.jpg",
    name: "Small BookSelf",
    price: 472,
    discount: 1,
    rating: 99,
    category: "Accessories",
    quantity: 1,
    description: "Modern minimalist bookshelf with adjustable shelves.",
    features: [
      "Adjustable shelf heights",
      "Sturdy MDF construction",
      "Hidden cable management",
      "Anti-tip design",
      "Easy assembly"
    ],
    specifications: {
      "Brand": "HomeStyle",
      "Material": "MDF",
      "Dimensions": "120x30x180cm",
      "Color": "White",
      "Weight Capacity": "50kg",
      "Warranty": "3 years"
    }
  },
  // Flash Sale Products
  "flash-1": {
    id: "flash-1",
    image: "/featured1.jpg",
    name: "Sony WH-1000XM4",
    price: 349.99,
    discount: 15,
    rating: 95,
    category: "Electronics",
    quantity: 1,
    description: "Premium wireless noise-canceling headphones.",
    features: [
      "Industry-leading noise cancellation",
      "30-hour battery life",
      "Touch controls",
      "Voice assistant support"
    ],
    specifications: {
      "Battery Life": "Up to 30 hours",
      "Noise Cancellation": "Yes",
      "Bluetooth Version": "5.0",
      "Weight": "254g"
    }
  },
  "flash-2": {
    id: "flash-2",
    image: "/featured2.jpg",
    name: "Apple Watch Series 8",
    price: 399.99,
    discount: 8,
    rating: 92,
    category: "Electronics",
    quantity: 1,
    description: "Advanced health and fitness tracking smartwatch.",
    features: [
      "Always-On Retina display",
      "Heart rate monitoring",
      "ECG app",
      "Fall detection"
    ],
    specifications: {
      "Display": "Always-On Retina",
      "Battery Life": "Up to 18 hours",
      "Water Resistance": "50m",
      "GPS": "Yes"
    }
  },
  "flash-3": {
    id: "flash-3",
    image: "/featured3.jpg",
    name: "PlayStation 5",
    price: 499.99,
    discount: 5,
    rating: 98,
    category: "Gaming",
    quantity: 1,
    description: "Next-gen gaming console with stunning graphics.",
    features: [
      "4K gaming",
      "Ray tracing",
      "SSD storage",
      "DualSense controller"
    ],
    specifications: {
      "Storage": "825GB SSD",
      "Graphics": "AMD RDNA 2",
      "CPU": "AMD Zen 2",
      "RAM": "16GB GDDR6"
    }
  },
  "flash-4": {
    id: "flash-4",
    image: "/featured4.jpg",
    name: "Fujifilm X-T4",
    price: 1699.99,
    discount: 12,
    rating: 94,
    category: "Electronics",
    quantity: 1,
    description: "Professional mirrorless camera for photography and video.",
    features: [
      "26.1MP sensor",
      "5-axis stabilization",
      "4K video",
      "Weather-resistant"
    ],
    specifications: {
      "Sensor": "26.1MP X-Trans CMOS 4",
      "Video": "4K 60p",
      "Stabilization": "5-axis",
      "Battery Life": "500 shots"
    }
  },
  // Explore Products
  "explore-1": {
    id: "explore-1",
    image: "/explore1.jpg",
    name: "Breed Dry Dog Food",
    price: 100,
    rating: 88,
    category: "Pet Supplies",
    quantity: 1,
    description: "Premium dry dog food for all breeds.",
    features: [
      "High-quality protein",
      "Essential nutrients",
      "Digestible formula",
      "No artificial colors"
    ],
    specifications: {
      "Weight": "10kg",
      "Protein": "25%",
      "Fat": "15%",
      "Fiber": "4%"
    }
  },
  "explore-2": {
    id: "explore-2",
    image: "/explore2.jpg",
    name: "CANON EOS DSLR Camera",
    price: 360,
    rating: 91,
    category: "Electronics",
    quantity: 1,
    description: "Professional DSLR camera for photography enthusiasts.",
    features: [
      "24.2MP sensor",
      "Full HD video",
      "WiFi connectivity",
      "Touch screen"
    ],
    specifications: {
      "Sensor": "24.2MP CMOS",
      "Video": "Full HD 60p",
      "Screen": "3-inch touch",
      "Battery": "600 shots"
    }
  },
  "explore-3": {
    id: "explore-3",
    image: "/explore3.jpg",
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    rating: 72,
    category: "Computers",
    quantity: 1,
    description: "High-performance gaming laptop with stunning display.",
    features: [
      "144Hz display",
      "RGB keyboard",
      "Dedicated graphics",
      "Cooling system"
    ],
    specifications: {
      "Processor": "Intel Core i7",
      "Graphics": "NVIDIA RTX 3060",
      "RAM": "16GB",
      "Storage": "512GB SSD"
    }
  },
  "explore-4": {
    id: "explore-4",
    image: "/explore4.jpg",
    name: "Curology Product Pack Set",
    price: 1500,
    discount: 10,
    rating: 69,
    category: "Beauty",
    quantity: 1,
    description: "Customized skincare routine for your skin type.",
    features: [
      "Custom formula",
      "Dermatologist-designed",
      "Natural ingredients",
      "Suitable for all skin types"
    ],
    specifications: {
      "Contents": "3 products",
      "Duration": "2 months",
      "Type": "Custom formula",
      "Usage": "Daily"
    }
  },
  "explore-5": {
    id: "explore-5",
    image: "/explore5.jpg",
    name: "Kids Electic Car",
    price: 960,
    discount: 5,
    rating: 87,
    category: "Toys",
    quantity: 1,
    description: "Safe and fun electric car for children.",
    features: [
      "Parental control",
      "LED lights",
      "MP3 player",
      "Safety belt"
    ],
    specifications: {
      "Age Range": "3-8 years",
      "Battery": "12V",
      "Speed": "2-5 km/h",
      "Weight Limit": "30kg"
    }
  },
  "explore-6": {
    id: "explore-6",
    image: "/explore6.jpg",
    name: "Jr.Zoom Soccer Cleats",
    price: 1160,
    discount: 15,
    rating: 97,
    category: "Sports",
    quantity: 1,
    description: "Professional soccer cleats for young players.",
    features: [
      "Lightweight design",
      "Ankle support",
      "Grip technology",
      "Breathable material"
    ],
    specifications: {
      "Material": "Synthetic",
      "Sizes": "US 1-13",
      "Type": "Firm ground",
      "Color": "Multiple options"
    }
  },
  "explore-7": {
    id: "explore-7",
    image: "/explore7.jpg",
    name: "GO11 Shooter USB Gamepad",
    price: 600,
    discount: 20,
    rating: 42,
    category: "Gaming",
    quantity: 1,
    description: "Ergonomic gamepad for comfortable gaming.",
    features: [
      "Programmable buttons",
      "Vibration feedback",
      "LED indicators",
      "Wide compatibility"
    ],
    specifications: {
      "Connectivity": "USB",
      "Buttons": "12",
      "Compatibility": "PC/PS3/PS4",
      "Cable Length": "2m"
    }
  },
  "explore-8": {
    id: "explore-8",
    image: "/explore8.jpg",
    name: "Quilted Satin Jacket",
    price: 721,
    discount: 10,
    rating: 71,
    category: "Fashion",
    quantity: 1,
    description: "Elegant quilted jacket for any occasion.",
    features: [
      "Water-resistant",
      "Inner pockets",
      "Quilted design",
      "Lightweight"
    ],
    specifications: {
      "Material": "Satin",
      "Filling": "Polyester",
      "Sizes": "XS-XXL",
      "Care": "Machine washable"
    }
  },
  "explore-9": {
    id: "explore-9",
    image: "/featured1.jpg",
    name: "Sony WH-1000XM4",
    price: 349.99,
    discount: 15,
    rating: 95,
    category: "Electronics",
    quantity: 1,
    description: "Premium wireless noise-canceling headphones with advanced features.",
    features: [
      "Active noise canceling",
      "30-hour battery life",
      "Touch controls",
      "Voice assistant support",
      "Multi-device pairing"
    ],
    specifications: {
      "Brand": "Sony",
      "Model": "WH-1000XM4",
      "Connectivity": "Bluetooth 5.0",
      "Battery Life": "30 hours",
      "Weight": "254g",
      "Warranty": "1 year"
    }
  },
  "explore-10": {
    id: "explore-10",
    image: "/featured2.jpg",
    name: "Apple Watch Series 8",
    price: 399.99,
    discount: 8,
    rating: 92,
    category: "Electronics",
    quantity: 1,
    description: "Latest Apple Watch with health monitoring and fitness tracking.",
    features: [
      "Always-on display",
      "Heart rate monitoring",
      "GPS tracking",
      "Water resistant",
      "ECG app"
    ],
    specifications: {
      "Brand": "Apple",
      "Model": "Series 8",
      "Display": "Always-on Retina",
      "Battery Life": "18 hours",
      "Water Resistance": "50m",
      "Warranty": "1 year"
    }
  },
  "explore-11": {
    id: "explore-11",
    image: "/featured3.jpg",
    name: "PlayStation 5",
    price: 499.99,
    discount: 5,
    rating: 98,
    category: "Gaming",
    quantity: 1,
    description: "Next-gen gaming console with ultra-fast SSD and ray tracing.",
    features: [
      "4K graphics",
      "Ray tracing",
      "DualSense controller",
      "3D audio",
      "Backward compatibility"
    ],
    specifications: {
      "Brand": "Sony",
      "Model": "PS5",
      "Storage": "825GB SSD",
      "Graphics": "AMD RDNA 2",
      "Resolution": "4K",
      "Warranty": "1 year"
    }
  },
  "explore-12": {
    id: "explore-12",
    image: "/featured4.jpg",
    name: "Fujifilm X-T4",
    price: 1699.99,
    discount: 12,
    rating: 94,
    category: "Electronics",
    quantity: 1,
    description: "Professional mirrorless camera with advanced video capabilities.",
    features: [
      "26.1MP sensor",
      "5-axis stabilization",
      "4K 60p video",
      "Weather sealed",
      "Dual card slots"
    ],
    specifications: {
      "Brand": "Fujifilm",
      "Model": "X-T4",
      "Sensor Size": "APS-C",
      "ISO Range": "160-12800",
      "Video Resolution": "4K 60p",
      "Warranty": "1 year"
    }
  },
  "explore-13": {
    id: "explore-13",
    image: "/product1.jpg",
    name: "MacBook Pro M2",
    price: 1299.99,
    discount: 7,
    rating: 96,
    category: "Computers",
    quantity: 1,
    description: "Powerful laptop with Apple's latest M2 chip and stunning display.",
    features: [
      "M2 chip",
      "Retina display",
      "Touch Bar",
      "Magic Keyboard",
      "Force Touch trackpad"
    ],
    specifications: {
      "Brand": "Apple",
      "Model": "MacBook Pro 14",
      "Processor": "M2",
      "RAM": "16GB",
      "Storage": "512GB SSD",
      "Warranty": "1 year"
    }
  },
  "explore-14": {
    id: "explore-14",
    image: "/product2.jpg",
    name: "Logitech MX Keys",
    price: 99.99,
    discount: 20,
    rating: 89,
    category: "Computers",
    quantity: 1,
    description: "Premium wireless keyboard with backlit keys and smart features.",
    features: [
      "Backlit keys",
      "Multi-device switching",
      "Smart backlighting",
      "Scissor switches",
      "Aluminum frame"
    ],
    specifications: {
      "Brand": "Logitech",
      "Model": "MX Keys",
      "Connectivity": "Bluetooth",
      "Battery Life": "5 months",
      "Layout": "Full size",
      "Warranty": "1 year"
    }
  },
  "explore-15": {
    id: "explore-15",
    image: "/product3.jpg",
    name: "LG 27GP850-B",
    price: 449.99,
    discount: 10,
    rating: 91,
    category: "Computers",
    quantity: 1,
    description: "High-performance gaming monitor with fast refresh rate and HDR.",
    features: [
      "165Hz refresh rate",
      "1ms response time",
      "HDR 400",
      "G-Sync compatible",
      "Ergonomic stand"
    ],
    specifications: {
      "Brand": "LG",
      "Model": "27GP850-B",
      "Size": "27 inches",
      "Resolution": "2560x1440",
      "Panel Type": "Nano IPS",
      "Warranty": "1 year"
    }
  },
  "explore-16": {
    id: "explore-16",
    image: "/product4.jpg",
    name: "Razer DeathAdder V3",
    price: 69.99,
    discount: 15,
    rating: 88,
    category: "Gaming",
    quantity: 1,
    description: "Ergonomic gaming mouse with optical switches and RGB lighting.",
    features: [
      "Optical switches",
      "RGB lighting",
      "Ergonomic design",
      "Programmable buttons",
      "Speedflex cable"
    ],
    specifications: {
      "Brand": "Razer",
      "Model": "DeathAdder V3",
      "Connectivity": "Wired",
      "DPI": "30000",
      "Buttons": "6",
      "Warranty": "2 years"
    }
  }
};

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = productData[params.id as keyof typeof productData];
  const [quantity, setQuantity] = useState(1);
  const [addingToCart, setAddingToCart] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product youwere looking for does not exist.</p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
    setAddingToCart(true);
    try {
      const success = addToCart({ ...product, quantity });
      if (success) {
        setNotificationMessage("Added to cart successfully!");
      } else {
        setNotificationMessage("Failed to add to cart");
      }
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } catch{
      setNotificationMessage("Error adding to cart");
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } finally {
      setAddingToCart(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {notificationMessage}
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <span className="text-gray-500">/</span>
          <Link href="/categories" className="text-gray-500 hover:text-gray-700">
            Categories
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-2xl font-bold text-blue-600">${product.price}</div>
              {product.discount && (
                <div className="text-lg text-gray-500 line-through">
                  ${(product.price + (product.price * product.discount) / 100).toFixed(2)}
                </div>
              )}
              <div className="text-yellow-400">⭐⭐⭐⭐⭐ ({product.rating})</div>
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4 mb-6">
              <label className="text-gray-700">Quantity:</label>
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={addingToCart}
              className={`w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ${
                addingToCart ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {addingToCart ? "Adding to Cart..." : "Add to Cart"}
            </button>

            {/* Features */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b pb-2">
                    <span className="font-medium text-gray-700">{key}:</span>
                    <span className="ml-2 text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 