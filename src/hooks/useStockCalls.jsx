import { useDispatch } from "react-redux";
import { getFail, getStart, getSuccess } from "../features/stockSlice";
import { useAxios } from "./useAxios";

const useStockCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();
  const getStockData = async (url) => {
    dispatch(getStart());
    try {
      const { data } = await axiosWithToken.get(`stock/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(getFail());
      console.log(error);
    }
  };

  const getFirms = () => getStockData("firms");
  const getSales = () => getStockData("sales");
  const getCategories = () => getStockData("categories");
  const getBrands = () => getStockData("brands");
  const getProducts = () => getStockData("products");
  const getPurchases = () => getStockData("purchases");

  return {
    getFirms,
    getSales,
    getCategories,
    getBrands,
    getProducts,
    getPurchases,
  };
};

export default useStockCalls;
