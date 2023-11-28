import { Outlet, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchPosts } from "./helpers/api";
import Header from "./components/header/Header";

export const loader = async () => {
  const posts = await fetchPosts();
  return { posts };
};

const App = () => {
  const posts = useLoaderData();
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
