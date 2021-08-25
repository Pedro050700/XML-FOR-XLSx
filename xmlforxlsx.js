var convert = require('xml-js');
const fs = require('fs');
const util = require("util");
const json2xls = require("json2xls");

var xml = require('fs').readFileSync('NFE.xml', 'utf8');
var options = { compact: true, spaces: 4, indentCdata: false, ignoreComment: true, ignoreCdata: true };
var result = convert.xml2js(xml, options); // or convert.xml2json(xml, options)
// console.log(util.inspect(result, false, null, true));
console.log(util.inspect(result.nfeProc.NFe.infNFe.emit.CNPJ._text, false, null, true));

//aqui eu crio uma variavel onde eu passo o meu json para xlsx
let xls = json2xls(result.nfeProc.NFe.infNFe.emit);
fs.writeFileSync("NFE.xlsx", xls, "binary");