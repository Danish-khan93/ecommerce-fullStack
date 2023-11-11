const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const fs = require("fs");


const filePath = path.join(process.cwd(), "data", "product.json");

app.get("/", (req, res) => {
   async fs.readFile(filePath, "utf8" ,(error, data) => {
      const data =await JSON.parse(data);
      console.log(data.product,"====>>>>");
      return data
  });
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
