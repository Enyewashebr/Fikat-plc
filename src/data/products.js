// Granite
import bgranite from "../assets/products/granite/bgranite.png";
import ggranite from "../assets/products/granite/ggranite.png";
import rgranite from "../assets/products/granite/rgranite.png";
import wgranite from "../assets/products/granite/wgranite.png";

// Marble
import blackMarble from "../assets/products/marble/bmarble.png";
import cremaMarble from "../assets/products/marble/crema-marble.png";
import carraraMarble from "../assets/products/marble/cmarble.png";
import statuarioMarble from "../assets/products/marble/smarble.png";
// import gmarble from "../assets/products/marble/gmarble.png";


// Ceramic
import floorCeramic from "../assets/products/ceramic/floor-ceramic.png";
import glossyCeramic from "../assets/products/ceramic/glossyceramic.png";
import matteCeramic from "../assets/products/ceramic/matte-ceramic.png";
import wallCeramic from "../assets/products/ceramic/wall-ceramic.png";

// Porcelain
import marbleLookPorcelain from "../assets/products/porcelain/marble-porcelain.png";
import outdoorPorcelain from "../assets/products/porcelain/outdoor-porcelain.png";
// import polishedPorcelain from "../assets/products/porcelain/polished-porcelain.png";
import woodLookPorcelain from "../assets/products/porcelain/wood-porcelain.png";

// Finishing Materials
// import finishing1 from "../assets/products/finishing/finishing1.png";
// import finishing2 from "../assets/products/finishing/finishing2.png";
// import finishing3 from "../assets/products/finishing/finishing3.png";
// import finishing4 from "../assets/products/finishing/finishing4.png";

export const products = [
  
  {
  id: 1,
  name: "Black Granite",
  category: "Granite",
  image: bgranite,

  shortDescription:
    "Premium black granite for residential and commercial projects.",

  description:
    "Black Granite is a highly durable natural stone widely used in residential and commercial construction projects. It is suitable for countertops, staircases, wall cladding, window sills, and decorative applications due to its strength, elegant appearance, and low maintenance requirements.",

  applications: [
    "Kitchen Countertops",
    "Staircases",
    "Wall Cladding",
    "Window Sills",
    "Commercial Flooring",
  ],

  finishes: [
    "Polished",
    "Honed",
    "Flamed",
  ],

  sizes: [
    "60×60 cm",
    "80×80 cm",
    "120×60 cm",
    "Custom Cut",
  ],

  origin: "India",
},
  {
    id: 2,
    name: "White Granite",
    category: "Granite",
    image: wgranite,
    shortDescription:
      "Elegant white granite suitable for kitchens, bathrooms, and flooring.",
    description:
      "White Granite is a natural stone known for its light color and subtle veining. It is commonly used in kitchens, bathrooms, and flooring applications, providing a clean and sophisticated look. Its durability and resistance to wear make it a popular choice for both residential and commercial spaces.",
    applications: [
  "Kitchen Countertops",
  "Staircases",
  "Wall Cladding",
  "Window Sills",
  "Commercial Flooring",
],

finishes: [
  "Polished",
  "Honed",
  "Flamed",
],

sizes: [
  "60×60 cm",
  "80×80 cm",
  "120×60 cm",
  "Custom Cut",
],
origin: "India",
  },
  {
    id: 3,
    name: "Gray Granite",
    category: "Granite",
    image: ggranite,
    shortDescription:
      "Durable gray granite for commercial and residential applications.",
    description:
      "Gray Granite is a versatile natural stone known for its durability and aesthetic appeal. It is suitable for both commercial and residential applications, including countertops, flooring, and wall cladding.",
    applications: [
      "Kitchen Countertops",
      "Staircases",
      "Wall Cladding",
      "Window Sills",
      "Commercial Flooring",
    ],
    finishes: [
      "Polished",
      "Honed",
      "Flamed",
    ],
    sizes: [
      "60×60 cm",
      "80×80 cm",
      "120×60 cm",
      "Custom Cut",
    ],
    origin: "China",
  },
  {
    id: 4,
    name: "Red Granite",
    category: "Granite",
    image: rgranite,
    shortDescription:
      "Natural red granite offering strength and distinctive appearance.",
    description:
      "Red Granite is a natural stone known for its vibrant color and unique veining. It is suitable for both commercial and residential applications, providing a bold and elegant look.", 
    applications: [
  "Kitchen Countertops",
  "Staircases",
  "Wall Cladding",
  "Window Sills",
  "Commercial Flooring",
],

finishes: [
  "Polished",
  "Honed",
  "Flamed",
],

sizes: [
  "60×60 cm",
  "80×80 cm",
  "120×60 cm",
  "Custom Cut",
],
origin: "India",
  },

  // MARBLE
  {
    id: 5,
    name: "Carrara Marble",
    category: "Marble",
    image: carraraMarble,
    shortDescription:
      "Classic Italian-style marble known for its elegant white surface.",
    description:
      "Carrara Marble is a premium natural stone originating from Italy, renowned for its white background and soft gray veining. It is widely used in luxury interiors, including flooring, wall cladding, and countertops, offering a timeless and sophisticated aesthetic.",
    applications: [
  "Bathrooms",
  "Living Rooms",
  "Feature Walls",
  "Flooring",
],

finishes: [
  "Polished",
  "Honed",
],

sizes: [
  "60×60 cm",
  "120×60 cm",
  "Custom Cut",
],
origin: "Italy",
  },
  {
    id: 6,
    name: "Statuario Marble",
    category: "Marble",
    image: statuarioMarble,
    shortDescription:
      "Luxury marble with bold veining for premium interior spaces.",
    description:
      "Statuario Marble is a high-end natural stone known for its distinctive veining and elegant appearance. It is ideal for premium interior applications, offering a sophisticated and luxurious look.",
    applications: [
      "Bathrooms",
      "Living Rooms",
      "Feature Walls",
      "Flooring",
    ],
    finishes: [
      "Polished",
      "Honed",
    ],
    sizes: [
      "60×60 cm",
      "120×60 cm",
      "Custom Cut",
    ],
    origin: "Italy",
  },
  {
    id: 7,
    name: "Crema Marfil Marble",
    category: "Marble",
    image: cremaMarble,
    shortDescription:
      "Warm beige marble perfect for floors, walls, and bathrooms.",
    description:
      "Crema Marfil Marble is a warm-toned natural stone known for its elegant appearance and versatility. It is ideal for various interior applications, providing a sophisticated and inviting atmosphere.",
    applications: [
      "Bathrooms",
      "Living Rooms",
      "Feature Walls",
      "Flooring",
    ],
    finishes: [
      "Polished",
      "Honed",
    ],
    sizes: [
      "60×60 cm",
      "120×60 cm",
      "Custom Cut",
    ],
    origin: "Spain",
  },
  {
    id: 8,
    name: "Black Marquina Marble",
    category: "Marble",
    image: blackMarble,
    shortDescription:
      "Sophisticated black marble with striking white veining.",
    description:
      "Black Marquina Marble is a luxurious natural stone characterized by its deep black background and distinctive white veining. It is perfect for creating dramatic and elegant interior spaces.",
    applications: [
      "Bathrooms",
      "Living Rooms",
      "Feature Walls",
      "Flooring",
    ],
    finishes: [
      "Polished",
      "Honed",
    ],
    sizes: [
      "60×60 cm",
      "120×60 cm",
      "Custom Cut",
    ],
    origin: "Spain",
  },

  // CERAMIC
  {
    id: 9,
    name: "Glossy Ceramic Tile",
    category: "Ceramic",
    image: glossyCeramic,
    shortDescription:
      "Smooth glossy ceramic tiles ideal for walls and decorative spaces.",
    description:
      "Glossy Ceramic Tiles offer a sleek and modern look, perfect for creating a sophisticated atmosphere in any room.",
    applications: [
  "Wall Covering",
  "Flooring",
  "Bathrooms",
  "Kitchens",
],

finishes: [
  "Glossy",
  "Matte",
],

sizes: [
  "30×30 cm",
  "60×60 cm",
  "30×60 cm",
],
origin: "China",
  },
  {
    id: 10,
    name: "Matte Ceramic Tile",
    category: "Ceramic",
    image: matteCeramic,
    shortDescription:
      "Modern matte finish ceramic tiles with excellent durability.",
    description:
      "Matte Ceramic Tiles offer a subtle and sophisticated look, perfect for creating a warm and inviting atmosphere in any room.",  
    applications: [
  "Wall Covering",
  "Flooring",
  "Bathrooms",
  "Kitchens",
],

finishes: [
  "Glossy",
  "Matte",
],

sizes: [
  "30×30 cm",
  "60×60 cm",
  "30×60 cm",
],
origin: "China",
  },
  {
    id: 11,
    name: "Wall Ceramic Tile",
    category: "Ceramic",
    image: wallCeramic,
    shortDescription:
      "Stylish ceramic wall tiles suitable for kitchens and bathrooms.",
    description:
      "Stylish ceramic wall tiles suitable for kitchens and bathrooms.",
    applications: [
      "Wall Covering",
    ],
    finishes: [
      "Glossy",
      "Matte",
    ],
    sizes: [
      "30×30 cm",
      "60×60 cm",
      "30×60 cm",
    ],
    origin: "China",
  },
  {
    id: 12,
    name: "Floor Ceramic Tile",
    category: "Ceramic",
    image: floorCeramic,
    shortDescription:
      "Strong ceramic floor tiles designed for residential use.",
    description:
      "Strong ceramic floor tiles designed for residential use, providing durability and style for any room in the house.",
    applications: [
  "Wall Covering",
  "Flooring",
  "Bathrooms",
  "Kitchens",
],

finishes: [
  "Glossy",
  "Matte",
],

sizes: [
  "30×30 cm",
  "60×60 cm",
  "30×60 cm",
],
origin: "China",
  },

  // PORCELAIN
  {
    id: 13,
    name: "Wood Look Porcelain Tile",
    category: "Porcelain",
    image: woodLookPorcelain,
    shortDescription:
      "Porcelain tile with the appearance of natural wood.",
    description:
      "Wood Look Porcelain Tile combines the aesthetic appeal of natural wood with the durability and low maintenance of porcelain. It is ideal for creating warm and inviting spaces in both residential and commercial settings.",
    applications: [
      "Wall Covering",
      "Flooring",
    ],
    finishes: [
      "Glossy",
      "Matte",
    ],
    sizes: [
      "30×30 cm",
      "60×60 cm",
      "30×60 cm",
    ],
    origin: "China",
  },
  {
    id: 14,
    name: "Marble Look Porcelain Tile",
    category: "Porcelain",
    image: marbleLookPorcelain,
    shortDescription:
      "Porcelain tile that replicates the elegance of marble.",
    description:
      "Marble Look Porcelain Tile offers the luxurious appearance of natural marble with the durability and low maintenance of porcelain. It is perfect for creating sophisticated and elegant spaces in both residential and commercial settings.",
    applications: [
  "Indoor Flooring",
  "Outdoor Areas",
  "Commercial Buildings",
  "Residential Projects",
],

finishes: [
  "Polished",
  "Matte",
  "Textured",
],

sizes: [
  "60×60 cm",
  "80×80 cm",
  "120×60 cm",
],
origin: "Spain",
  },
  {
    id: 15,
    name: "Outdoor Porcelain Tile",
    category: "Porcelain",
    image: outdoorPorcelain,
    shortDescription:
      "Weather-resistant porcelain tile for outdoor applications.",
    description:
      "Outdoor Porcelain Tile is designed to withstand various weather conditions, making it an excellent choice for outdoor spaces.",
    applications: [
      "Outdoor Areas",
    ],
    finishes: [
      "Polished",
      "Matte",
      "Textured",
    ],
    sizes: [
      "60×60 cm",
      "80×80 cm",
      "120×60 cm",
    ],
    origin: "China",
  },
  
];
