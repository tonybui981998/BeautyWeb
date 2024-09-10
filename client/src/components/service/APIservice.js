import axios from "axios";
const getAllProduct = () => {
  return axios.get("http://localhost:8081/api/getAllprodcut");
};
export { getAllProduct };
