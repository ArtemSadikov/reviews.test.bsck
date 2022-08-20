export interface ILogger  {
  print(): void
}

export class Logger {
  constructor() {}

  public log(message: string) {
    console.log(message);
  }
}
