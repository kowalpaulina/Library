export interface Books {
    id: string,
    author: string,
    title: string,
    read?: boolean,
    lend?: boolean,
    borrower: string,
    dateFrom?:string,
    dateTo?:string
}