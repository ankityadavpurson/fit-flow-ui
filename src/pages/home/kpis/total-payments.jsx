import React, { useEffect, useState } from "react";
import { fetchTotalAmount } from "../../../helper/apis";
import LoadingDumbbell from "../../../components/loader/loading-dumbbell";

const TotalPayments = () => {
  const [totalPayments, setTotalPayments] = useState(0);
  const [loading, setLoading] = useState(false);

  const getTotalPayments = async () => {
    setLoading(true);
    const totalPayments = await fetchTotalAmount();
    setTotalPayments(totalPayments);
    setLoading(false);
  };

  useEffect(() => {
    getTotalPayments();
  }, []);

  return (
    <a href="/subscriptions" className="kpi-card">
      {loading ? (
        <LoadingDumbbell />
      ) : (
        <>
          <h3>Payments Received</h3>
          <p>₹{totalPayments}</p>
        </>
      )}
    </a>
  );
};

export default TotalPayments;
