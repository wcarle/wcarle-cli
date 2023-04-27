import { App } from "./app";

describe("Test App", () => {
  let app: App;

  beforeEach(() => {
    app = new App();
  });

  test("Run the app", () => {
    expect(app.initialized).toBe(true);
    expect(app.run()).toBe("RUN");
  });
});
