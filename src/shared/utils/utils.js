const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
};


const hasId = ({ id }) => {
  if (!person || !quote)
    throw new AppError("Wrong parameters", 400);
};

module.exports = {
  getRandomElement
};
