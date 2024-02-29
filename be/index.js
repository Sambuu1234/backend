import express from "express";
import cors from "cors";
import fs from "fs";

const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());

let user = [];

app.get("/", (request, response) => {
  response.json(user);
});

app.post("/user", (request, response) => {
  user.push(request.body);

  console.log(user);
  response.send(user);
});

app.listen(port, () => {
  console.log(`aslaa http://localhost:${port}`);
});

// try {
//   const data = fs.readFileSync("db.json");
//   user = JSON.parse(data);
// } catch (error) {
//   console.log("Error reading db.json:", error);
// }
