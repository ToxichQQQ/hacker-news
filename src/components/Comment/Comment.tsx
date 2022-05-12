import React, { FC } from "react";
import { IPost } from "../../types/types";
import styles from "./Comment.module.css";

interface IComment {
  comment: IPost;
}

export const Comment: FC<IComment> = ({ comment }) => {
  const date = new Date(comment.time * 1000);
  const formattedDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;

  return (
    <div>
      <p className={styles.info}>
        {comment.by} {formattedDate}
      </p>
      <p className={styles.text}>{comment.text}</p>
    </div>
  );
};
