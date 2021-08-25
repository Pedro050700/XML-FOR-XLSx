const fs = require("fs");
const xml2js = require("xml2js");
const json2xls = require("json2xls");

const util = require("util");

const parser = new xml2js.Parser();

fs.readFile("nfe.xml", (err, data) => {
  parser.parseString(data,(err, result) => {
  console.log(util.inspect(result, false, null, true));

    

  
    
    //aqui vc implementa o foreach pra selecionar os campos que
      //voce quer converter do arquivo nfe.xml
      let xls = json2xls(result);

      fs.writeFileSync("nfe.xlsx", xls, "binary");
  });
});