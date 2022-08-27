
// created method for room
const playCodeBreaker = async (req, res, next) => {

  try {
    res.status(200).json("success");
    
  } catch (err) {
    console.log(err);
  }
};


export default { playCodeBreaker };
