export class App {
  private readonly _message = "Welcome To JS-Testing-Starter";

  constructor() {
    this.welcome();
  }

  private welcome() {
    console.log(this._message);
  }

  public max(a: number, b: number): number {
    return a > b ? a : b;
  }
}
