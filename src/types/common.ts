export type ColorPalets =
  | "#ff6b6b"
  | "#da77f2"
  | "#9775fa"
  | "#5c7cfa"
  | "#66d9e8"
  | "#8ce99a"
  | "#ffd43b"
  | "#ff922b";

export type Task = {
  id: string;
  userId: string;
  title: string;
  description: string;
  createdOn: string;
  dueDateOn: string;
  listType: {
    typeName: string;
    color: ColorPalets;
  };
  completed: boolean;
};
