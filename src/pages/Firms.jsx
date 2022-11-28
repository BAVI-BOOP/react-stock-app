import React, { useEffect } from "react";
import useStockCalls from "../hooks/useStockCalls";

const Firms = () => {
  const { getFirms } = useStockCalls();

  useEffect(() => {
    getFirms();
  }, []);

  return <div>Firms</div>;
};

export default Firms;
