import React from "react";
import { Outlet } from "react-router-dom";
import CategoryDirectory from "../../components/category-directory/CategoryDirectory";

const Home = () => {
  return (
    <div>
      <Outlet />
      <CategoryDirectory />;
    </div>
  );
};

export default Home;
