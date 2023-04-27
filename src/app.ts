export class App {
  private _initialized: boolean;
  // size getter
  public get initialized(): boolean {
    return this._initialized;
  }
  constructor() {
    this._initialized = true;
  }
  run() {
    return "RUN";
  }
}
