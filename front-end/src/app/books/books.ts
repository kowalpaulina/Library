export interface Books {
    id: number,
    author: string,
    title: string,
    read?: boolean,
    lend?: boolean,
    borrower: object,
    borrowedByUser?: object,
    borrowedByUserId?: string,
    dateFrom?:string,
    dateTo?:string
}