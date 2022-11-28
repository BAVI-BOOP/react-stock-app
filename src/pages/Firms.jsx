import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import useStockCalls from "../hooks/useStockCalls";

const Firms = () => {
  const { getFirms } = useStockCalls();

  useEffect(() => {
    getFirms();
    const BASE_URL = "https://13791.fullstack.clarusway.com/";
  }, []);

  return <div>Firms</div>;
};

export default Firms;
