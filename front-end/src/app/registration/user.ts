export class Users {
  constructor(
      public _id: string,
      public name: string,
      public email: string,
      public password: string,
      public approved?: boolean,
      public friend?: boolean,
      public booksBorrowed? : string,
      public reservedBooks? : string,
    ) { }
}