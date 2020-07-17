export class Book {
    constructor(name) {
      this.Id = Date.now();
      this.Name = name,
      this.Read = 0;
      this.toRead = 0;
    }
  }