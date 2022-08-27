const codeBreakerGame = (secreto, intento) => {
  console.log(secreto,  intento);
    var countX = 0;
    var count_ = 0;
    var countEmpty = 0;
    secreto.split("").forEach((x, idx) => {
      switch (idx) {
        case 0:
          if (x === intento[0]) {
            countX += 1;
          } else if (x === intento[1]) {
            count_ += 1;
          } else if (x === intento[2]) {
            count_ += 1;
          } else if (x === intento[3]) {
            count_ += 1;
          }
          break;
        case 1:
          if (x === intento[0]) {
            count_ += 1;
          } else if (x === intento[1]) {
            countX += 1;
          } else if (x === intento[2]) {
            count_ += 1;
          } else if (x === intento[3]) {
            count_ += 1;
          }
          break;
        case 2:
          if (x === intento[0]) {
            count_ += 1;
          } else if (x === intento[1]) {
            count_ += 1;
          } else if (x === intento[2]) {
            countX += 1;
          } else if (x === intento[3]) {
            count_ += 1;
          }
          break;
        case 3:
          if (x === intento[0]) {
            count_ += 1;
          } else if (x === intento[1]) {
            count_ += 1;
          } else if (x === intento[2]) {
            count_ += 1;
          } else if (x === intento[3]) {
            countX += 1;
          }
          break;
      }
    });
    countEmpty = 4 - (countX + count_);

    var result = "";
    for (let i = 0; i < countX; i++) {
      result += "X";
    }
    for (let i = 0; i < count_; i++) {
      result += "-";
    }
    for (let i = 0; i < countEmpty; i++) {
      result += "";
    }
    return result;
  
};

export default codeBreakerGame;
