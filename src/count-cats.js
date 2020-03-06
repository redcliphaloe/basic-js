module.exports = function countCats( matrix ) {
  let countCats = 0;

  matrix.forEach(element => {
    element.forEach(element => {
      countCats += +(element == "^^");
    });
  });

  return countCats;
};
