import f1 from  "./f1.jpg"
import f2 from "./f2.jpg";
import f3 from "./f3.jpg";
import f4 from "./f4.jpg";
import f9 from "./f9.jpg";
import f10 from "./f10.jpg";
import f11 from "./f11.jpg";

import c1 from "./c1.jpg";
import c2 from "./c2.jpg";
import c3 from "./c3.jpg";
import c4 from "./c4.jpg";
import c5 from "./c5.jpg";

import b1 from "./b1.jpg";
import b2 from "./b2.jpg";
import b3 from "./b3.jpg";
import b4 from "./b4.jpg";
import b5 from "./b5.jpg";

import chicken1 from "./chicken1.jpg";
import chicken2 from "./chicken2.jpg";
import chicken3 from "./chicken3.jpg";
import chicken4 from "./chicken4.jpg";
import chicken5 from "./chicken5.jpg";
// import hero from "./hero.jpg";

import i1 from "./i1.jpg";
import i2 from "./i2.jpg";
import i3 from "./i3.jpg";
import i6 from "./i6.jpg";
import i7 from "./i7.jpg";
import i8 from "./i8.jpg";

import pizza1 from "./pizza1.jpg";
import pizza2 from "./pizza2.jpg";
import pizza3 from "./pizza3.jpg";
import pizza4 from "./pizza4.jpg";
import v1 from "./v1.jpg";
import v2 from "./v2.jpg";
import v3 from "./v3.jpg";
import v8 from "./v8.jpg";
import v9 from "./v9.jpg";

import cart from "./cart.png";
import user from "./user.png";
import logo from "./logo.png";
import hero from  "./hero.jpg";

export const assets = {
  // hero,
  f4,
  v1,
  c4,
  logo,
  cart,
  user,
  hero
};
export const products = [
  {
    id: 1,
    image: f1,
    name: "Fresh Apple",
    category: "Fruit",
    description:
      "A juicy and sweet apple, packed with nutrients. Perfect for a healthy snack. Rich in antioxidants and vitamins. Ideal for making apple pies and smoothies.",
    price: 150,
  },
  {
    id: 2,
    image: f2,
    name: "Ripe Banana",
    category: "Fruit",
    description:
      "Delicious ripe bananas full of natural sweetness. Great for energy and digestion. A great source of potassium and fiber. Perfect for shakes, desserts, or snacks.",
    price: 100,
  },
  {
    id: 3,
    image: f3,
    name: "Juicy Orange",
    category: "Fruit",
    description:
      "Fresh and tangy oranges rich in Vitamin C. A great immune booster. Perfect for juices, salads, and desserts. Helps keep your skin fresh and glowing.",
    price: 120,
  },
  {
    id: 4,
    image: f4,
    name: "Sweet Mango",
    category: "Fruit",
    description:
      "Tropical and delicious mangoes with a rich, sweet taste. Great for shakes, desserts, and fresh eating. Loaded with Vitamin A and fiber. A summer favorite!",
    price: 200,
  },

  {
    id: 9,
    image: f9,
    name: "Papaya",
    category: "Fruit",
    description:
      "A tropical fruit packed with digestive enzymes and vitamins. Helps in digestion and glowing skin. Great for breakfast or as a healthy snack.",
    price: 160,
  },
  {
    id: 10,
    image: f10,
    name: "Pomegranate",
    category: "Fruit",
    description:
      "A powerhouse of antioxidants, known for its health benefits. Helps improve heart health and boosts immunity. Perfect for juices or fresh eating.",
    price: 220,
  },
  {
    id: 11,
    image: f11,
    name: "Kiwi",
    category: "Fruit",
    description:
      "A small fruit with a tangy-sweet taste, packed with Vitamin C and fiber. Great for digestion and boosting immunity. Perfect for fruit salads and smoothies.",
    price: 280,
  },
  {
    id: 12,
    image: v1,
    name: "Fresh Carrot",
    category: "Vegetable",
    description:
      "Crunchy and sweet carrots rich in Vitamin A. Great for vision and skin health. Perfect for salads, juices, and cooking. A must-have in every kitchen.",
    price: 80,
  },
  {
    id: 13,
    image: v2,
    name: "Green Broccoli",
    category: "Vegetable",
    description:
      "Nutrient-packed broccoli, loaded with fiber and vitamins. Helps in digestion and boosts immunity. Ideal for stir-fries, soups, and healthy eating.",
    price: 150,
  },
  {
    id: 14,
    image: v3,
    name: "Red Bell Pepper",
    category: "Vegetable",
    description:
      "Bright red bell peppers, full of antioxidants and Vitamin C. Great for salads, cooking, and grilling. Adds a sweet and crunchy texture to dishes.",
    price: 120,
  },

  {
    id: 19,
    image: v8,
    name: "Brinjal (Eggplant)",
    category: "Vegetable",
    description:
      "Rich and flavorful brinjal, great for curries and grilling. High in fiber and antioxidants. A delicious addition to various cuisines.",
    price: 100,
  },
  {
    id: 20,
    image: v9,
    name: "Onion",
    category: "Vegetable",
    description:
      "Essential kitchen ingredient with a strong, rich taste. Perfect for cooking, salads, and making flavorful dishes. Rich in antioxidants and vitamins.",
    price: 50,
  },
  {
    id: 21,
    image: chicken1,
    name: "Fresh Whole Chicken",
    category: "Chicken",
    description:
      "Fresh and organic whole chicken, perfect for roasting and grilling. Packed with protein and nutrients. A great choice for family meals and special occasions.",
    price: 500,
  },
  {
    id: 22,
    image: chicken2,
    name: "Chicken Breast Fillet",
    category: "Chicken",
    description:
      "Lean and tender chicken breast fillets, great for healthy meals. High in protein and low in fat. Ideal for grilling, baking, and stir-frying.",
    price: 600,
  },
  {
    id: 23,
    image: chicken3,
    name: "Chicken Drumsticks",
    category: "Chicken",
    description:
      "Juicy and flavorful chicken drumsticks, perfect for frying and roasting. A favorite for BBQs and parties. Marinate and cook for a delicious meal.",
    price: 450,
  },
  {
    id: 24,
    image: chicken4,
    name: "Chicken Wings",
    category: "Chicken",
    description:
      "Crispy and tender chicken wings, perfect for deep-frying and grilling. A great choice for snacks and game nights. Serve with your favorite sauce!",
    price: 400,
  },
  {
    id: 25,
    image: chicken5,
    name: "Chicken Mince (Keema)",
    category: "Chicken",
    description:
      "Freshly minced chicken, ideal for making kebabs, curries, and burgers. Soft texture and rich taste. A healthy and versatile option for cooking.",
    price: 550,
  },
  {
    id: 26,
    image: c1,
    name: "Chocolate Fudge Cake",
    category: "Cake",
    description:
      "A rich and moist chocolate cake topped with creamy chocolate ganache. Perfect for chocolate lovers. Ideal for birthdays and celebrations.",
    price: 800,
  },
  {
    id: 27,
    image: c2,
    name: "Vanilla Sponge Cake",
    category: "Cake",
    description:
      "A soft and fluffy vanilla sponge cake with a light texture. Great for tea-time and parties. Pairs well with fresh cream and fruits.",
    price: 700,
  },
  {
    id: 28,
    image: c3,
    name: "Red Velvet Cake",
    category: "Cake",
    description:
      "A classic red velvet cake with a smooth cream cheese frosting. Soft, moist, and delicious. A perfect treat for special occasions.",
    price: 900,
  },
  {
    id: 29,
    image: c4,
    name: "Black Forest Cake",
    category: "Cake",
    description:
      "A delightful black forest cake with layers of chocolate, cherries, and whipped cream. A favorite for all celebrations.",
    price: 850,
  },
  {
    id: 30,
    image: c5,
    name: "Strawberry Delight Cake",
    category: "Cake",
    description:
      "A delicious strawberry cake with fresh strawberry topping and cream. Light, refreshing, and full of fruity flavors.",
    price: 750,
  },

  {
    id: 33,
    image: b1,
    name: "Classic Beef Burger",
    category: "Burger",
    description:
      "A juicy beef patty topped with fresh lettuce, tomatoes, and cheese in a soft sesame bun. A timeless favorite for burger lovers.",
    price: 400,
  },
  {
    id: 34,
    image: b2,
    name: "Crispy Chicken Burger",
    category: "Burger",
    description:
      "Golden crispy chicken fillet served with fresh lettuce, mayo, and cheese. Perfect for a crunchy and flavorful bite.",
    price: 380,
  },
  {
    id: 35,
    image: b3,
    name: "Cheese Lovers' Burger",
    category: "Burger",
    description:
      "A double-layered beef patty loaded with melted cheese, onions, and signature sauce. A dream for cheese lovers.",
    price: 450,
  },
  {
    id: 36,
    image: b4,
    name: "Spicy Zinger Burger",
    category: "Burger",
    description:
      "A crispy spicy chicken fillet with a fiery sauce, fresh lettuce, and mayo in a soft bun. Perfect for those who love a spicy kick.",
    price: 420,
  },
  {
    id: 37,
    image: b5,
    name: "Veggie Delight Burger",
    category: "Burger",
    description:
      "A healthy and tasty burger with a flavorful vegetable patty, fresh greens, and creamy dressing. A great choice for vegetarians.",
    price: 350,
  },

  {
    id: 39,
    image: i1,
    name: "Classic Vanilla",
    category: "Ice Cream",
    description:
      "Smooth and creamy vanilla ice cream made from real vanilla beans. A timeless favorite that pairs well with any dessert.",
    price: 250,
  },
  {
    id: 40,
    image: i2,
    name: "Rich Chocolate",
    category: "Ice Cream",
    description:
      "Decadent chocolate ice cream made with premium cocoa. Perfect for chocolate lovers who enjoy a rich and smooth texture.",
    price: 280,
  },
  {
    id: 41,
    image: i3,
    name: "Strawberry Bliss",
    category: "Ice Cream",
    description:
      "Refreshing strawberry ice cream with real fruit chunks. A delightful treat for those who love a fruity twist.",
    price: 270,
  },
  {
    id: 42,
    image: i1,
    name: "Mango Delight",
    category: "Ice Cream",
    description:
      "Tropical mango ice cream bursting with real mango flavor. A refreshing and sweet escape on a hot day.",
    price: 260,
  },
  {
    id: 43,
    image: i8,
    name: "Mango Delight",
    category: "Ice Cream",
    description:
      "Crunchy chocolate cookie pieces blended into smooth vanilla ice cream. A perfect combination of crunch and creaminess.",
    price: 290,
  },
  {
    id: 44,
    image: i6,
    name: "Rich Chocolate",
    category: "Ice Cream",
    description:
      "Crunchy chocolate cookie pieces blended into smooth vanilla ice cream. A perfect combination of crunch and creaminess.",
    price: 290,
  },
  {
    id: 45,
    image: f10,
    name: "Pistachio Delight",
    category: "Ice Cream",
    description:
      "Crunchy chocolate cookie pieces blended into smooth vanilla ice cream. A perfect combination of crunch and creaminess.",
    price: 290,
  },
  {
    id: 46,
    image: i7,
    name: "Blueberry Swirl",
    category: "Ice Cream",
    description:
      "Crunchy chocolate cookie pieces blended into smooth vanilla ice cream. A perfect combination of crunch and creaminess.",
    price: 290,
  },

  {
    id: 47,
    image: pizza1,
    name: "Margherita Pizza",
    category: "Pizza",
    description:
      "A classic Margherita pizza topped with fresh tomato sauce, mozzarella cheese, and fresh basil leaves. Simple yet delicious.",
    price: 600,
  },
  {
    id: 48,
    image: pizza2,
    name: "Pepperoni Pizza",
    category: "Pizza",
    description:
      "A flavorful pizza loaded with spicy pepperoni slices and melted mozzarella cheese on a crispy crust.",
    price: 750,
  },
  {
    id: 49,
    image: pizza3,
    name: "BBQ Chicken Pizza",
    category: "Pizza",
    description:
      "Grilled chicken pieces, red onions, and tangy BBQ sauce layered over a crispy crust with gooey cheese.",
    price: 800,
  },
  {
    id: 50,
    image: pizza4,
    name: "Veggie Supreme Pizza",
    category: "Pizza",
    description:
      "A colorful mix of bell peppers, olives, mushrooms, and onions on a cheesy tomato base. Perfect for veggie lovers.",
    price: 700,
  },
];
