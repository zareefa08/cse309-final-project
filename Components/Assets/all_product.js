import p1_img from "./n1.png";
import p2_img from "./n2.png";
import p3_img from "./n3.png";
import p4_img from "./n4.png";
import p5_img from "./n5.png";
import p6_img from "./n6.png";
import p7_img from "./n7.png";
import p8_img from "./n8.png";
import p9_img from "./n9.png";
import p10_img from "./n10.png";
import p11_img from "./n11.png";
import p12_img from "./n12.png";
import p13_img from "./n13.png";
import p14_img from "./n14.png";
import p15_img from "./n15.png";
import p16_img from "./n16.png";
import p17_img from "./n17.png";
import p18_img from "./n18.png";
import p19_img from "./n19.png";
import p20_img from "./n20.png";
import p21_img from "./n21.png";
import p22_img from "./n22.png";
import p23_img from "./n23.png";
import p24_img from "./n24.png";
import p25_img from "./n25.png";
import p26_img from "./n26.png";
import p27_img from "./n27.png";
import p28_img from "./n28.png";



let all_product = [
  {
    id: 1,
    name: "Hydrating Wash - Keeps skin clean and moisturized",
    category: "skin",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Glow Enhancer - Leaves skin radiant and dewy",
    category: "skin",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Exfoliating Wash - Smooths skin with gentle scrub action",
    category: "skin",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Glow Enhancer - Leaves skin radiant and dewy",
    category: "skin",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 5,
    name: "Hydrating Serum - Boosts moisture for plump skin",
    category: "skin",
    image: p5_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 6,
    name: "Refreshing Foam - Light lather for a clean, cool feel",
    category: "skin",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "Glow Enhancer - Leaves skin radiant and dewy.",
    category: "skin",
    image: p7_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 8,
    name: "Hydrating Serum - Boosts moisture for plump skin",
    category: "skin",
    image: p8_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 9,
    name: "Glow Enhancer - Leaves skin radiant and dewy.",
    category: "skin",
    image: p9_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 10,
    name: "Hydrating Serum - Boosts moisture for plump skin",
    category: "skin",
    image: p10_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "Glow Enhancer - Leaves skin radiant and dewy",
    category: "skin",
    image: p11_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 12,
    name: "Glow Enhancer - Leaves skin radiant and dewy.",
    category: "skin",
    image: p12_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 13,
    name: "Blush - Adds a natural flush of color",
    category: "makeup",
    image: p13_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "Eyeshadow - Bold or soft color for every mood",
    category: "makeup",
    image: p14_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 15,
    name: "Blush - Adds a natural flush of color",
    category: "makeup",
    image: p15_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 16,
    name: "Lipstick - Rich color, smooth finish",
    category: "makeup",
    image: p16_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "Blush - Adds a natural flush of color",
    category: "makeup",
    image: p17_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 18,
    name: "Concealer - Hides blemishes and dark circles.",
    category: "makeup",
    image: p18_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 19,
    name: "Eyeshadow - Bold or soft color for every mood",
    category: "makeup",
    image: p19_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 20,
    name: "Blush - Adds a natural flush of color",
    category: "makeup",
    image: p20_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 21,
    name: "Lipstick - Rich color, smooth finish",
    category: "makeup",
    image: p21_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 22,
    name: "Foundation - Smooth, even coverage all day",
    category: "makeup",
    image: p22_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 23,
    name: "Lipstick - Rich color, smooth finish",
    category: "makeup",
    image: p23_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 24,
    name: "Eyeshadow - Bold or soft color for every mood",
    category: "makeup",
    image: p24_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 25,
    name: "Ombre Fade - Soft blend, salon look",
    category: "nail",
    image: p25_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 25,
    name: "Ombre Fade - Soft blend, salon look",
    category: "nail",
    image: p26_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 25,
    name: "Ombre Fade - Soft blend, salon look",
    category: "nail",
    image: p27_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 25,
    name: "Ombre Fade - Soft blend, salon look",
    category: "nail",
    image: p28_img,
    new_price: 85.0,
    old_price: 120.5,
  }
];

export default all_product;
