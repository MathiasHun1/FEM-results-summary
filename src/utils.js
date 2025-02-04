const calculateAverage = (...args) => {
  if (!args) {
    return;
  }

  const divider = args.length;
  const addedValues = args.reduce((total, value) => {
    return total + Number(value);
  }, 0);

  return Math.floor(addedValues / divider);
};

export default {
  calculateAverage,
};
