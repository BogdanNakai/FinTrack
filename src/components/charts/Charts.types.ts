interface ISeriesData {
  data: (number | null)[];
  label: string;
  color: string;
}

export interface ILineDiagram {
  pData: (number | null)[];
  uData: (number | null)[];
  seriesData: ISeriesData[];
  title?: string;
}

type InfoCategoryItem = {
  label: string;
  value: number;
  color: string;
  darkColor: string;
};

export type MyComponentProps = {
  categoriesData: InfoCategoryItem[];
  title: string;
  text?: string;
};