export async function handler(event) {
  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ok: true,
      message: "Hello from Amplify Gen 2 template",
      path: event?.rawPath || "/",
    }),
  };
}