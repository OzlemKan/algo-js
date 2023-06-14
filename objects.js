const readlineSync = require("readline-sync");

// ex 5.1

function askTvSerie() {
  const name = readlineSync.question("what's your favorite TV Serie?");
  const productionYear = readlineSync.question("What's its production year?");

  let castMembers = [];
  let addCastMember = true;

  while (addCastMember) {
    const castMember = readlineSync.question(
      "Enter the name of a cast member (or 'done' to finish): "
    );
    if (castMember.toLowerCase() === "done") {
      addCastMember = false;
    } else {
      castMembers.push(castMember);
    }
  }

  const tvSerie = {
    name: name,
    productionYear: productionYear,
    castMembers: castMembers,
  };

  return tvSerie;
}

const favoriteTvSerie = askTvSerie();
console.log("Your favorite TV series:", favoriteTvSerie);

//ex 5.2

/**
 * Randomizes the order of cast members in the given TV series object.
 * @param {object} tvSerie - The TV series object containing cast members.
 * @returns {string[]} An array of cast members in random order.
 */
function randomizeCast(tvSerie) {
  const castMembers = tvSerie.castMembers;
  const randomizedCast = [...castMembers];

  // Fisher-Yates (Knuth) Shuffle algorithm
  for (let i = randomizedCast.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomizedCast[i], randomizedCast[j]] = [
      randomizedCast[j],
      randomizedCast[i],
    ];
  }

  return randomizedCast;
}

/**
 * Asks the user for data about their favorite TV series and displays a randomized cast for the next series.
 */
function program() {
  const tvSerie = askTvSerie();
  const randomizedCast = randomizeCast(tvSerie);

  console.log("\nTV Series Details:");
  console.log("Name:", tvSerie.name);
  console.log("Production Year:", tvSerie.productionYear);

  console.log("\nRandomized Cast for Next Series:");
  randomizedCast.forEach((castMember, index) => {
    console.log(`${index + 1}. ${castMember}`);
  });
}

// Start the program
program();
