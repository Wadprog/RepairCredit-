export const capitalLizeString = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const isLetter = str => {
  return str.match(/[a-z]/i);
};

export const camelobjectToString = camelobject => {
  let restring = "";
  const arr = camelobject.split("");
  for (let pos = 0; pos < arr.length; pos++) {
    const character = arr[pos];
    if (isLetter(character)) {
      if (character == character.toUpperCase()) restring += " " + character;
      else restring += character;
    }
  }
  return capitalLizeString(restring);
};
