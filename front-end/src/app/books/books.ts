export interface Books {
  id: string;
  author: string;
  title: string;
  read?: boolean;
  lend?: boolean;
  borrower: any;
  dateFrom?: string;
  dateTo?: string;
}
