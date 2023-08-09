// import React, { useEffect, useState } from "react";
import { Filtered_Posts_URL, Posts_URL } from "../mocks/URLs";
// import axios from "axios";
import { Post } from "../types/types";
import { useAxiosGet } from "../hooks/useAxiosGet";

const Posts = () => {
  //not used since we have the custom hook for useAxiosGet
  //   const [posts, setPosts] = useState<Post[] | null>();
  //   const [filteredPosts, setFilteredPosts] = useState<Post[] | null>();

  const [posts] = useAxiosGet<Post[] | null>(`${Posts_URL}`, []);
  const [filteredPosts] = useAxiosGet<Post[] | null>(
    `${Filtered_Posts_URL}`,
    []
  );

  //not used since we have the custom hook for useAxiosGet
  //   useEffect(() => {
  //     axios.get(`${Posts_URL}`).then((response) => setPosts(response.data));
  //     axios
  //       .get(`${Filtered_Posts_URL}`)
  //       .then((response) => setFilteredPosts(response.data));
  //   }, []);

  return (
    <div>
      Posts page
      <button onClick={() => console.log(posts)}>posts console log</button>
      <button onClick={() => console.log(filteredPosts)}>
        filteredPosts console log
      </button>
    </div>
  );
};

export default Posts;
