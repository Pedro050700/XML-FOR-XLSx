// Cria diretório para salvar os arquivos XML´s
const fs = require("fs-extra");
const pdf2excel = require('pdf-to-excel');
const pdf = require('pdf-parse');
const dir = "/";
const options = {
  mode: 0o2775,
};
  
// Function call using Promises
fs.ensureDir(dir, options)
  .then(() => console.log("Pasta criada com sucesso..."))
  .catch((e) => console.log(e));

// Descompacta arquivo zip na pasta dist
const decompress = require('decompress');
 
decompress('04.zip', dir).then(files => {
    console.log('Processo Finalizado!');
});

const parser = require("xml2js");
const util = require("util");
var json2xls = require("json2xls");
const { Http2ServerRequest } = require("http2");

function listarArquivodaPasta(pasta, arquivos) {
  if(!arquivos)
    arquivos = [];

    let listaDeArquivos = fs.readdirSync(pasta);  
    console.log(listaDeArquivos);  
   
    //const xmlFiles = [];
    //xmlFiles.push(listaDeArquivos)
    //console.log(xmlFiles)

    try {
      const files = ['./arquivosxml/NFE_33210110976771000172550010001008861451315974.xml', './arquivosxml/NFE_33210110976771000172550010001008871107178985.xml']
     
      for (const file of files) {
        console.log(fs.readFileSync(file, 'utf8')        
        );
      }
    }
    catch (error) {
      console.error(error);
    }   

    try {
      const options = {
        onProcess: (e) => console.warn(`${e.numPage} / ${e.numPages}`),
        start: 1,
        end: 1,
      }
      pdf2excel.genXlsx('MODELO - CONTA LUZ.pdf', 'Conta de Luz.xlsx', options);
    } catch (err) {
      console.log(err)
    }

    let dataBuffer = fs.readFileSync('MODELO - CONTA LUZ.pdf');
 
    pdf(dataBuffer).then(function(data) {
 
    // number of pages
    //console.log(data.numpages);
    
    // number of rendered pages
   // console.log(data.numrender);
    // PDF info
   // console.log(data.info);
    // PDF metadata
    console.log(data.data); 
    // PDF.js version
    // check https://mozilla.github.io/pdf.js/getting_started/
  // console.log(data.version);
    // PDF text
    console.log(data.text); 
        
});
}

listarArquivodaPasta('./arquivosxml');