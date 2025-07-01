import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { UserIcon } from "@heroicons/react/solid";
import axios from "axios";

const DashboardPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(location.state?.user || null);

  useEffect(() => {
  if (!user) {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:3001/typeorm/me", {
          withCredentials: true,
        });
        setUser(response.data.user);
      } catch (err) {
        console.error("Could not fetch user:", err);
        navigate("/dashboard"); // redirect if not authenticated
      }
    };

    fetchUser();
  }
}, [user, navigate]);

  // ⚠️ Don't render anything until user is confirmed or redirected
  if (!user) return null;

  return (
    <div className="dashboard p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h1>
      <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow">
        {/* <UserIcon className="w-6 h-6 mr-2 text-blue-600" /> */}
        <span className="text-lg font-medium">
          Login Streak: {user.streak} day{user.streak !== 1 ? "s" : ""}
        </span>
      </div>
    </div>
  );
};

export default DashboardPage;
