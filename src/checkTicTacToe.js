if ("X" !== checkTicTacToe([["X", "", ""], ["X", "O", "O"], ["X", "", ""]])) {
  throw new Error("Failed to find match 'X'");
}

if ("O" !== checkTicTacToe([["X", "", ""], ["O", "O", "O"], ["X", "", "X"]])) {
  throw new Error("Failed to find match 'O'");
}

if ("" !== checkTicTacToe([["X", "", ""], ["O", "O", ""], ["X", "", ""]])) {
  throw new Error("Found unexpected match");
}

export default function checkTicTacToe(matrix) {
  const height = matrix.length;
  const width = matrix.reduce((max, vector) => Math.max(max, vector.length), 0);
  const values = matrix.reduce((all, vector) => {
    const limit = vector.length;
    const count = width;
    let index = 0;

    all.push.apply(all, vector);

    for (index = limit; index < count; index++) {
      all.push("");
    }

    return all;
  }, []);
  let found = "";

  found = findHorizontalConsecutive(width, height, values);

  if (found) {
    return found;
  }

  found = findVerticalConsecutive(width, height, values);

  if (found) {
    return found;
  }

  found = findAskewConsecutive(width, height, values);

  if (found) {
    return found;
  }

  return "";
}

function findHorizontalConsecutive(width, height, values) {
  let xx = 0;
  let yy = 0;
  let at = 0;
  let found = "";
  let count = 0;

  for (yy = 0; yy < height; yy++) {
    count = 0;
    for (xx = 0; xx < width; xx++) {
      at = xx + yy * width;
      if (!values[at]) {
        found = "";
        break;
      } else if (!found) {
        found = values[at];
      } else if (found !== values[at]) {
        found = "";
        break;
      }
      count += 1;
    }

    if (count >= width) {
      return found;
    }
  }

  return "";
}

function findVerticalConsecutive(width, height, values) {
  let xx = 0;
  let yy = 0;
  let at = 0;
  let found = "";
  let count = 0;

  for (xx = 0; xx < width; xx++) {
    count = 0;
    for (yy = 0; yy < height; yy++) {
      at = xx + yy * width;
      if (!values[at]) {
        found = "";
        break;
      } else if (!found) {
        found = values[at];
      } else if (found !== values[at]) {
        found = "";
        break;
      }
      count += 1;
    }

    if (count >= height) {
      return found;
    }
  }

  return "";
}

function findAskewConsecutive(width, height, values) {
  const size = width;
  let xx = 0;
  let at = 0;
  let found = "";
  let count = 0;

  if (width === height) {
    count = 0;
    for (xx = 0; xx < size; xx++) {
      at = xx + xx * size;
      if (!values[at]) {
        found = "";
        break;
      } else if (!found) {
        found = values[at];
      } else if (found !== values[at]) {
        found = "";
        break;
      }
      count += 1;
    }

    if (count >= size) {
      return found;
    }

    count = 0;
    for (xx = 0; xx < size; xx++) {
      at = xx + (size - 1 - xx) * size;
      if (!values[at]) {
        found = "";
        break;
      } else if (!found) {
        found = values[at];
      } else if (found !== values[at]) {
        found = "";
        break;
      }
      count += 1;
    }

    if (count >= size) {
      return found;
    }
  }

  return "";
}
