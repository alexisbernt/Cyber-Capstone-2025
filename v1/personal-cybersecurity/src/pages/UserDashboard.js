// DashboardPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { UserIcon } from "@heroicons/react/solid"; // or any other icon lib

const DashboardPage = () => {
  const location = useLocation();
  const { user } = location.state || {};

  if (!user) return <div>Please log in</div>;

  return (
    <div className="dashboard">
      <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
      <div className="flex items-center mt-4">
        <UserIcon className="w-6 h-6 mr-2 text-blue-600" />
        <span className="text-lg">Login Streak: {user.streak} days</span>
      </div>
    </div>
  );
};

export default DashboardPage;
