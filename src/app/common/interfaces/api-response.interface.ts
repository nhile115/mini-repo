export interface IPaging {
  page: number;
  perPage: number;
  totalItem: number;
}

export interface IMeta {
  paging?: IPaging;
}

export interface IResponseFormat<T> {
  data: T;
  message?: string | string[];
  statusCode?: number;
  error?: string;
  meta?: IMeta;
}
