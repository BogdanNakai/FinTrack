interface ISeriesData {
  data: (number | null)[];
  label: string;
  color: string;
}

export interface LineDiagramIncExpProps {
  pData: (number | null)[];
  uData: (number | null)[];
  seriesData: ISeriesData[];
  title?: string;
}
