import { error, log } from "console";
import fs from "fs";
// // shine folder uusgeh
// fs.mkdir("test", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("amjilttai uusle");
//   }
// });

// fs.writeFileSync("text.txt", "sambuu");

// fs.writeFile("writefile.txt", "writefile", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("amjilttai uusle");
//   }
// });

// const read = fs.readFileSync("text.txt");
// console.log(read.toString());

// const read = fs.readFile("text.txt", (error, data) =>
//   console.log(read.toString())
// );

const data = { age: 20, name: "bi" };
fs.writeFileSync("db.json", JSON.stringify(data));
// //log der harah
// const stringify = JSON.stringify(data);
// const parse = JSON.parse(stringify);
// console.log(stringify, "===", parse);
