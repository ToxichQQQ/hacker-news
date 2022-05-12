import React, { useEffect, useState } from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import "./App.css";
import { CommentPage } from "./pages/CommentPage/CommentPage";
import { IPost } from "./types/types";
import { getNewPosts, getPost } from "./url";

function App() {
  const [selectPost, setSelectedPost] = useState<IPost>();
  const [posts, setNewPost] = useState<IPost[]>([]);

  const changeSelectedPost = (value: IPost) => {
    setSelectedPost(value);
  };

  const backToHomePage = (value: undefined) => {
    setSelectedPost(value);
  };

  useEffect(() => {
    (async () => {
      const topPosts = await getNewPosts();
      const arr = await getPost(topPosts);
      setNewPost(arr);
    })();
  }, []);

  return (
    <div className="container">
      <h1 className="header">Hacker News</h1>
      {selectPost ? (
        <CommentPage
          backToHomePage={backToHomePage}
          selectedPost={selectPost}
        />
      ) : (
        <HomePage posts={posts} changeSelectedPost={changeSelectedPost} />
      )}
    </div>
  );
}

export default App;
