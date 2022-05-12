export interface IPost {
  id: string;
  type: string;
  time: number;
  text: string;
  kids: [];
  descendants: number;
  url: string;
  title: string;
  score: number;
  by: string;
}

export interface IComment {
  by: string;
  id: number;
  kids: [];
  parent: [];
  text: string;
  time: number;
}

export interface NewStories {
  stories: [];
}
