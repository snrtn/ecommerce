import {
  FaMale,
  FaFemale,
  FaChild,
  FaShoppingBag,
  FaRunning,
  FaMobileAlt,
  FaHome,
  FaTshirt,
  FaShoePrints,
  FaHatCowboy,
  FaCouch,
  FaPaintBrush,
  FaBlender,
} from "react-icons/fa";
import {
  GiRunningShoe,
  GiClothes,
  GiNecklace,
  GiCookingPot,
} from "react-icons/gi";
import { MdLaptop, MdOutlineWatch, MdOutlineLocalCafe } from "react-icons/md";

const menus = {
  hommes: {
    icon: FaMale,
    sections: [
      {
        title: "Upper",
        icon: GiClothes,
        items: [
          { label: "Jackets", href: "/hommes/jackets" },
          { label: "Shirts", href: "/hommes/shirts" },
          { label: "T-Shirts", href: "/hommes/tshirts" },
          { label: "Hoodies", href: "/hommes/hoodies" },
          { label: "Sweaters", href: "/hommes/sweaters" },
        ],
      },
      {
        title: "Lower",
        icon: FaTshirt,
        items: [
          { label: "Jeans", href: "/hommes/jeans" },
          { label: "Shorts", href: "/hommes/shorts" },
          { label: "Trousers", href: "/hommes/trousers" },
        ],
      },
      {
        title: "Footwear",
        icon: FaShoePrints,
        items: [
          { label: "Shoes", href: "/hommes/shoes" },
          { label: "Sneakers", href: "/hommes/sneakers" },
          { label: "Boots", href: "/hommes/boots" },
        ],
      },
      {
        title: "Accessories",
        icon: FaHatCowboy,
        items: [
          { label: "Belts", href: "/hommes/belts" },
          { label: "Hats", href: "/hommes/hats" },
          { label: "Watches", href: "/hommes/watches" },
        ],
      },
    ],
  },
  femmes: {
    icon: FaFemale,
    sections: [
      {
        title: "Upper",
        icon: GiClothes,
        items: [
          { label: "Dresses", href: "/femmes/dresses" },
          { label: "Tops", href: "/femmes/tops" },
          { label: "T-Shirts", href: "/femmes/tshirts" },
          { label: "Blouses", href: "/femmes/blouses" },
          { label: "Sweaters", href: "/femmes/sweaters" },
        ],
      },
      {
        title: "Lower",
        icon: FaTshirt,
        items: [
          { label: "Leggings", href: "/femmes/leggings" },
          { label: "Jeans", href: "/femmes/jeans" },
          { label: "Shorts", href: "/femmes/shorts" },
          { label: "Skirts", href: "/femmes/skirts" },
        ],
      },
      {
        title: "Footwear",
        icon: FaShoePrints,
        items: [
          { label: "Shoes", href: "/femmes/shoes" },
          { label: "Sneakers", href: "/femmes/sneakers" },
          { label: "Sandals", href: "/femmes/sandals" },
          { label: "Heels", href: "/femmes/heels" },
        ],
      },
      {
        title: "Accessories",
        icon: GiNecklace,
        items: [
          { label: "Handbags", href: "/femmes/handbags" },
          { label: "Scarves", href: "/femmes/scarves" },
          { label: "Jewelry", href: "/femmes/jewelry" },
        ],
      },
    ],
  },
  enfants: {
    icon: FaChild,
    sections: [
      {
        title: "Upper",
        icon: GiClothes,
        items: [
          { label: "Jackets", href: "/enfants/jackets" },
          { label: "Shirts", href: "/enfants/shirts" },
          { label: "T-Shirts", href: "/enfants/tshirts" },
          { label: "Sweaters", href: "/enfants/sweaters" },
          { label: "Hoodies", href: "/enfants/hoodies" },
        ],
      },
      {
        title: "Lower",
        icon: FaTshirt,
        items: [
          { label: "Jeans", href: "/enfants/jeans" },
          { label: "Shorts", href: "/enfants/shorts" },
          { label: "Leggings", href: "/enfants/leggings" },
          { label: "Trousers", href: "/enfants/trousers" },
        ],
      },
      {
        title: "Footwear",
        icon: FaShoePrints,
        items: [
          { label: "Shoes", href: "/enfants/shoes" },
          { label: "Sneakers", href: "/enfants/sneakers" },
          { label: "Boots", href: "/enfants/boots" },
        ],
      },
      {
        title: "Accessories",
        icon: FaShoppingBag,
        items: [
          { label: "Hats", href: "/enfants/hats" },
          { label: "Backpacks", href: "/enfants/backpacks" },
          { label: "Socks", href: "/enfants/socks" },
        ],
      },
    ],
  },
  accessoires: {
    icon: FaShoppingBag,
    sections: [
      {
        title: "Bags",
        icon: FaShoppingBag,
        items: [
          { label: "Handbags", href: "/accessoires/handbags" },
          { label: "Backpacks", href: "/accessoires/backpacks" },
          { label: "Wallets", href: "/accessoires/wallets" },
        ],
      },
      {
        title: "Jewelry",
        icon: GiNecklace,
        items: [
          { label: "Necklaces", href: "/accessoires/necklaces" },
          { label: "Rings", href: "/accessoires/rings" },
          { label: "Bracelets", href: "/accessoires/bracelets" },
        ],
      },
      {
        title: "Others",
        icon: FaShoppingBag,
        items: [
          { label: "Sunglasses", href: "/accessoires/sunglasses" },
          { label: "Hats", href: "/accessoires/hats" },
          { label: "Belts", href: "/accessoires/belts" },
        ],
      },
    ],
  },
  sports: {
    icon: FaRunning,
    sections: [
      {
        title: "Clothing",
        icon: GiClothes,
        items: [
          { label: "T-Shirts", href: "/sports/tshirts" },
          { label: "Shorts", href: "/sports/shorts" },
          { label: "Tracksuits", href: "/sports/tracksuits" },
        ],
      },
      {
        title: "Footwear",
        icon: GiRunningShoe,
        items: [
          { label: "Running Shoes", href: "/sports/running-shoes" },
          { label: "Training Shoes", href: "/sports/training-shoes" },
          { label: "Sneakers", href: "/sports/sneakers" },
        ],
      },
      {
        title: "Accessories",
        icon: FaShoppingBag,
        items: [
          { label: "Hats", href: "/sports/hats" },
          { label: "Bags", href: "/sports/bags" },
          { label: "Watches", href: "/sports/watches" },
        ],
      },
    ],
  },
  electronics: {
    icon: FaMobileAlt,
    sections: [
      {
        title: "Mobile",
        icon: FaMobileAlt,
        items: [
          { label: "Smartphones", href: "/electronics/smartphones" },
          { label: "Tablets", href: "/electronics/tablets" },
          { label: "Smartwatches", href: "/electronics/smartwatches" },
        ],
      },
      {
        title: "Computers",
        icon: MdLaptop,
        items: [
          { label: "Laptops", href: "/electronics/laptops" },
          { label: "Desktops", href: "/electronics/desktops" },
          { label: "Monitors", href: "/electronics/monitors" },
        ],
      },
      {
        title: "Accessories",
        icon: MdOutlineWatch,
        items: [
          { label: "Headphones", href: "/electronics/headphones" },
          { label: "Keyboards", href: "/electronics/keyboards" },
          { label: "Mice", href: "/electronics/mice" },
        ],
      },
    ],
  },
  home: {
    icon: FaHome,
    sections: [
      {
        title: "Furniture",
        icon: FaCouch,
        items: [
          { label: "Sofas", href: "/home/sofas" },
          { label: "Chairs", href: "/home/chairs" },
          { label: "Tables", href: "/home/tables" },
        ],
      },
      {
        title: "Decor",
        icon: FaPaintBrush,
        items: [
          { label: "Wall Art", href: "/home/wall-art" },
          { label: "Rugs", href: "/home/rugs" },
          { label: "Lamps", href: "/home/lamps" },
        ],
      },
      {
        title: "Kitchen",
        icon: GiCookingPot,
        items: [
          { label: "Cookware", href: "/home/cookware" },
          { label: "Utensils", href: "/home/utensils" },
          { label: "Appliances", href: "/home/appliances" },
        ],
      },
    ],
  },
};

export default menus;
