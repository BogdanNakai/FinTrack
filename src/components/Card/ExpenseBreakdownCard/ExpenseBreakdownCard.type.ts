type InfoCategoryItem = {
  label: string;
  value: number;
  color: string;
  darkColor: string;
};

export type MyComponentProps = {
  categoriesData: InfoCategoryItem[];
  title: string
};
