import { app, port } from "./config/app.js";

app.listen(port, () => {
  console.log("Server works!");
});
