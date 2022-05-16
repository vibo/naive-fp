const naiveFold = (empty) => (xs) =>
  xs.reduce((acc, x) => acc.concat(x), empty);

const naiveFoldMap = (type) => (empty) => (xs) =>
  naiveFold(empty)(xs.map(type));
