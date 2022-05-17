import { url } from "./constants";
import { IPost } from "./types/types";

export const getNewPosts = async () => {
  const res = await fetch(`${url}/topstories.json?print=pretty`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return data.slice(0, 30);
};

export const getPost = async (newPosts: []) => {
  let array: IPost[] = [];

  await Promise.all(
    newPosts.map(async (post) => {
      const res = await fetch(`${url}/item/${post}.json?print=pretty`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data: IPost = await res.json();
      await array.push(data);
    })
  );

  return array;
};
