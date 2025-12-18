const app = require("../src/app.js");
const request = require("supertest");

const expectedMessage = process.env.MESSAGE || "Hello, World!";

describe("GET /", () => {
  it("should return hello world", async () => {
    return request(app)
      .get("/")
      .expect(200)
      .expect((res) => {
        if (res.body.message !== expectedMessage) {
          throw new Error(
            `Expected message to be '${expectedMessage}' but got '${res.body.message}'`
          );
        }

        if (!res.body.timestamp) {
          throw new Error("Expected timestamp to be present");
        }
      });
  });
});
