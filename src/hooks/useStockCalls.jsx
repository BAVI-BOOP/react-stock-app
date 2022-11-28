import { useDispatch } from "react-redux";
import { getFail, getStart, getSuccess } from "../features/stockSlice";
import { axiosWithToken } from "../service/axiosInstance";

const useStockCalls = () => {
  const dispatch = useDispatch();

  const getFirms = async () => {
    const url = "firms";
    dispatch(getStart());
    try {
      const { data } = await axiosWithToken.get(`stock/firms/`);
      console.log(data);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(getFail());
      console.log(error);
    }
  };

  return {
    getFirms,
  };
};

export default useStockCalls;
