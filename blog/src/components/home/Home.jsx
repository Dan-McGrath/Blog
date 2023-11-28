import Hero from "../hero";
import Posts from "../posts/Posts";
import { useLoaderData } from "react-router-dom";
import { fetchPosts } from "../../helpers/api";

export const loader = async () => {
  const posts = await fetchPosts();
  return { posts };
};

const Home = () => {
  const posts = useLoaderData();

  return (
    <>
      <Hero />
      <Posts postArray={posts} />
    </>
  );
};

export default Home;
