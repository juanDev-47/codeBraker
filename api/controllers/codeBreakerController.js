import codeBreakerGame from "../utils/codeBreakerGame.js";

// created method for room
const playCodeBreaker = (req, res) => {
  const { secreto, intento } = req.body;

  const result = codeBreakerGame(secreto, intento);

  res.status(200).json({ result });
};

const healthCheck = async (req, res) => {
  res.status(200).json({ message: "ok" });
};

export default { playCodeBreaker, healthCheck };
