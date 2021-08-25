const fs = require("fs");
const json2xls = require("json2xls");
const util = require("util");


fs.readFile("exemplo.json", "utf8", (err, data) => {
  if (err) throw err;
  const json = JSON.parse(data);
  const jsonArray = [];
  json.forEach(function (item) {
    let temp = {
      name: item.name,
      description: item.description,
      author: item.author,
    };
    jsonArray.push(temp);
  });

  let xls = json2xls(jsonArray);
  

  fs.writeFileSync("exemplo.xlsx", xls, "binary");
});


