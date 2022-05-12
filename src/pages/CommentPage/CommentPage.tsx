import React, { FC, useEffect, useState } from "react";
import { IPost } from "../../types/types";
import { getPost } from "../../url";
import { Comment } from "../../components/Comment/Comment";
import styles from "./CommentPage.module.css";

interface commentPage {
  selectedPost?: IPost;
  backToHomePage: (value: undefined) => void;
}

export const CommentPage: FC<commentPage> = ({
  selectedPost,
  backToHomePage,
}) => {
  const [comments, setComments] = useState<IPost[]>([]);

  useEffect(() => {
    (async () => {
      if (selectedPost) {
        const comments = await getPost(selectedPost.kids);
        setComments(comments);
      }
    })();
  }, []);

  return (
    <div>
      <span className={styles.back} onClick={() => backToHomePage(undefined)}>
        Back
      </span>
      <h6 className={styles.header}>{selectedPost?.title}</h6>
      {comments.length ? (
        comments.map((comment) => <Comment comment={comment} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
