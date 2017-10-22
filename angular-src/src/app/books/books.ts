export interface Books {
    id: number,
    author: string,
    title: string,
    read?: boolean,
    borrowed?: boolean,
    borrower?:string
    dateFrom?:number,
    dateTo?:number
}