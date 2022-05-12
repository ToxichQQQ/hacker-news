import React, { FC } from "react";
import { IPost } from "../../types/types";
import styles from "./Post.module.css";

interface postComponent {
  post: IPost;
  index: number;
  changeSelectedPost: (value: IPost) => void;
}

export const Post: FC<postComponent> = ({
  post,
  index,
  changeSelectedPost,
}) => {
  const date = new Date(post.time * 1000);
  const formattedDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;

  return (
    <div>
      <h6 className={styles.header}>
        {index + 1}.
        <a className={styles.link} href={post.url}>
          {post.title}
        </a>
      </h6>
      <p className={styles.text}>
        {post.score} points by {post.by} | {formattedDate} |{" "}
        <span
          className={styles.comments}
          onClick={() => changeSelectedPost(post)}
        >
          {post.descendants} comments
        </span>
      </p>
    </div>
  );
};
