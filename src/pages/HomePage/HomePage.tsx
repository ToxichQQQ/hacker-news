import React, { FC } from "react";
import { IPost } from "../../types/types";
import { Post } from "../../components/Post/Post";

interface HomePageProps {
  changeSelectedPost: (value: IPost) => void;
  posts: IPost[];
}

export const HomePage: FC<HomePageProps> = ({ posts, changeSelectedPost }) => {
  return (
    <div>
      {posts.length ? (
        posts.map((post, index) => (
          <Post
            changeSelectedPost={changeSelectedPost}
            index={index}
            key={post.id}
            post={post}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
