import React, { useState, useEffect } from "react";
import { fetchUsers } from "../../../helper/apis";
import LoadingDumbbell from "../../../components/loader/loading-dumbbell";

const TotalMembers = () => {
  const [totalMembers, setTotalMembers] = useState(0);
  const [loading, setLoading] = useState(false);

  const getAllUsers = async () => {
    setLoading(true);
    const users = await fetchUsers();
    setTotalMembers(users.length);
    setLoading(false);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <a href="/members" className="kpi-card">
      {loading ? (
        <LoadingDumbbell />
      ) : (
        <>
          <h3>Total Members</h3>
          <p>{totalMembers}</p>
        </>
      )}
    </a>
  );
};

export default TotalMembers;
