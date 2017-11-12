export interface Books {
    id: number,
    author: string,
    title: string,
    read?: boolean,
    lend?: boolean,
    borrower?:string
    dateFrom?:number,
    dateTo?:number
}