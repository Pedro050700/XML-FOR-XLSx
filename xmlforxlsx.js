var convert = require('xml-js');
const fs = require('fs');
const util = require("util");
const json2xls = require("json2xls");

                                     
var xml = require('fs').readFileSync('NFE.xml', 'utf8');
var options = { compact: true, spaces: 4, ignoreComment: true, ignoreCdata: true };
var result = convert.xml2js(xml, options); 

 var dest = {
    cnpj: result.nfeProc.NFe.infNFe.dest.CNPJ._text,
    nome: result.nfeProc.NFe.infNFe.dest.xNome._text,
 }
 console.log(dest);

// console.log(util.inspect(result.nfeProc.NFe.infNFe.dest, false, null, true));

// aqui eu crio uma variavel onde eu passo o meu json para xlsx
 var xls = json2xls(dest);
fs.writeFileSync("NFE.xlsx", xls, "binary");
