export interface PaginationInterface {
  prev: string;
  next: string;
  pages: number;
  getPage: (action: string) => void;
}