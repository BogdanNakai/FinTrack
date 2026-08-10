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
