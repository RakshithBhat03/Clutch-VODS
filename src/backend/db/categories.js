import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Mini Movies",
    description: "Mini movies from the NBA finals",
    thumbnail:
      "https://res.cloudinary.com/clutchaf/image/upload/v1654691349/Video%20Library/Mini%20Movies/youthumb_iDCegwpnlbM_high_e1jwru.webp",
  },
  {
    _id: uuid(),
    categoryName: "Highlights",
    description: "All the flashy plays and dunks from the NBA",
    thumbnail:
      "https://res.cloudinary.com/clutchaf/image/upload/v1654692288/Video%20Library/Highlights/youthumb_7fPcse1phtk_high_cjhfmj.webp",
  },
  {
    _id: uuid(),
    categoryName: "Top Plays",
    description: "The top plays from the NBA",
    thumbnail:
      "https://res.cloudinary.com/clutchaf/image/upload/v1654692288/Video%20Library/Highlights/youthumb_cuLprHh_BRg_high_bzn0lg.webp",
  },
  {
    _id: uuid(),
    categoryName: "Fails",
    description: "Funny fails and moments from the NBA",
    thumbnail:
      "https://res.cloudinary.com/clutchaf/image/upload/v1654693786/Video%20Library/Fails/youthumb_UKFCwrFe88Y_high_lt7qjl.webp",
  },
];
