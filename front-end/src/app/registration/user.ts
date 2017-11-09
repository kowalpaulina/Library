export class Users {
  constructor(
      public _id: number,
      public name: string,
      public email: string,
      public password: string,
      public approved?: boolean,
      public booksBorrowed? : string,
      public reservedBooks? : string,
    ) { }
}