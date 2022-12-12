const flowers = [
  {
    id: 1,
    type: "Rose",
    colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
    price: 2.59,
    usdaZones: [3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 2,
    type: "Tulip",
    colors: ["Orange", "White", "Yellow", "Violet", "Red"],
    price: 1.04,
    usdaZones: [5, 6, 7, 8, 9],
  },
  {
    id: 3,
    type: "Daisy",
    colors: ["Gold", "White", "Orange", "Crimson"],
    price: 0.89,
    usdaZones: [3, 4, 5, 6, 7, 8],
  },
  {
    id: 4,
    type: "Carnation",
    colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
    price: 1.59,
    usdaZones: [5, 6, 7, 8, 9],
  },
  {
    id: 5,
    type: "Bird of Paradise",
    colors: ["Orange", "White"],
    price: 2.33,
    usdaZones: [9, 10, 11],
  },
  {
    id: 6,
    type: "Delphinium",
    colors: ["Blue", "Violet", "White", "Pink"],
    price: 1.67,
    usdaZones: [3, 4, 5, 6, 7],
  },
  {
    id: 7,
    type: "Gladiolus",
    colors: [
      "White",
      "Cream",
      "Yellow",
      "Red",
      "Pink",
      "Green",
      "Lavender",
      "Voilet",
    ],
    price: 1.85,
    usdaZones: [6, 7, 8, 9, 10],
  },
  {
    id: 8,
    type: "Lilly",
    colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
    price: 1.52,
    usdaZones: [3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: 9,
    type: "Chinese Lantern",
    colors: ["Orange"],
    price: 2.33,
    usdaZones: [3, 4, 5, 6, 7, 8, 9],
  },
];

/*
  Below are some functions, in which you will write ALL of your
  code. Do not modify the code that defines the functions, and
  do not write any code outside of the functions.
*/

/*
  This function should return inexpensive flowers - ones that cost
  less than 2.00 per flower.
*/
const inexpensiveFlowers = () => {
  const filteredFlowers = []; // Do not modify

  /*
    Iterate over flowers
    if the flower .price() is <2.00
    .push() the flower to filteredFlowers
  */
  for (const flower of flowers) {
    if (flower.price < 2.0) {
      filteredFlowers.push(flower);
    }
  }

  return filteredFlowers; // Do not modify
};

/*
  This function should return flowers that grow in
  USDA zones of 3 and 8.
*/
const zoneFlowers = () => {
  const filteredFlowers = []; // Do not modify

  /* 
    for each flower, check if zones includes 3 and 8
    if true, push the flower to filteredFlowers
  */
  for (const flower of flowers) {
    if (flower.usdaZones.includes(3) && flower.usdaZones.includes(8)) {
      filteredFlowers.push(flower);
    }
  }

  return filteredFlowers; // Do not modify
};

/*
  This function should return flowers that come in the color Orange
*/
const orangeFlowers = () => {
  const filteredFlowers = []; // Do not modify

  /*
    iterate over the array flowers
    if Orange is included in .colors, .push() it to filteredFlowers
  */
  for (const flower of flowers) {
    if (flower.colors.includes("Orange")) {
      filteredFlowers.push(flower);
    }
  }

  return filteredFlowers; // Do not modify
};

/*
  This function should return an HTML representation of each flower.

  Expected string format:
    <article>
      <h1>Bird of Paradise</h1>

      <h2>Colors</h2>
      <section>White</section>
      <section>Orange</section>

      <h2>USDA Zones</h2>
      <div>9</div>
      <div>10</div>
      <div>11</div>
    </article>
*/

const flowersAsHTML = () => {
  let flowersHTMLString = ""; // Do not modify

  /*
    Algorithmic thinking is most important on this one.
    We would rather see the correct algorithm than the
    correct code. If you have code that works, but no
    algorithm, then you failed the exercise.
  */

  for (const flower of flowers) {
    /*
      start a new article string for each flower
      newline and indent for the header
    */
    let flowerArticleString = "<article>\n\t";

    /*
      wrap the flower name in an h1
      add two newlines
      and indent for the colors header
    */
    flowerArticleString += `<h1>${flower.type}</h1>\n\n\t`;

    /*
      add the "Colors" header
      plus a newline and tab
    */
    flowerArticleString += "<h2>Colors</h2>\n\t";

    /*
      use .join() to join the flowers' colors with section tags
      and wrap the .join() string in an opening and closing section
      followed by two newlines + tab
    */
    flowerArticleString += `<section>${flower.colors.join(
      "</section>\n<section>"
    )}</section>\n\n\t`;

    /*
      add the "USDA Zones" header
      plus a newline and tab
    */
    flowerArticleString += "<h2>USDA Zones</h2>\n\t";

    /*
      .join() the zones together with <div> tags and newlines
      and wrap the .joined array in a div, and newline
    */
    flowerArticleString += `<div>${flower.usdaZones.join(
      "</div>\n<div>"
    )}</div>\n`;

    /*
      close the article tag
      and add the article string to the full HTML string
    */
    flowerArticleString += "</article>";
    flowersHTMLString += flowerArticleString;
  }

  return flowersHTMLString; // Do not modify
};

/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers;
module.exports = {
  inexpensiveFlowers,
  orangeFlowers,
  zoneFlowers,
  flowersAsHTML,
};
/*  DO NOT TOUCH THIS CODE  */
