import { App } from "./app";

describe("Test App", () => {
  let app: App;

  beforeEach(() => {
    app = new App();
  });

  test("Run the app", () => {
    expect(app.run()).toBe("RUN");
  });
});
