import { defineBackend } from "@aws-amplify/backend";
import { Api } from "@aws-amplify/backend-api";
import { Function } from "@aws-amplify/backend-function";

const hello = new Function({
  name: "hello",
  entry: "./functions/hello/index.mjs",
  runtime: 20,
  timeoutSeconds: 10,
  memoryMB: 256,
  environment: {
    NODE_ENV: "production",
  },
});

const api = new Api({
  name: "templateApi",
  routes: {
    "ANY /{proxy+}": hello,
    "ANY /": hello,
  },
});

export default defineBackend({ api });