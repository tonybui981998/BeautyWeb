const processAPI = require("../processAPI/processAPI");
const handleAllProduct = async (req, res) => {
  try {
    let allProdcuts = await processAPI.getAllProductDB();
    return res.status(200).json({
      DM: allProdcuts.DM,
      DC: allProdcuts.DC,
      DT: allProdcuts,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      DM: "Sorry something wrong from server ",
      DC: -1,
      DT: "",
    });
  }
};
module.exports = {
  handleAllProduct,
};
