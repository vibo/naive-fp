export const Either = {
  of: (x) => Right(x),
};

export const Right = (x) => ({
  x,
  concat: (e) =>
    e.fold(
      (_) => e,
      (y) => Right(x.concat(y))
    ),
  map: (f) => Right(f(x)),
  chain: (f) => f(x),
  fold: (_, g) => g(x),
});

export const Left = (x) => ({
  x,
  concat: () => Left(x),
  map: () => Left(x),
  chain: (_) => Left(x),
  fold: (f, _) => f(x),
});

export const fromNullable = (x) => (x == null ? Left(x) : Right(x));

export const tryCatch = (f) => {
  try {
    return Right(f());
  } catch (error) {
    return Left(error);
  }
};
