const path = require("path");

// Apenas o nome do arquivo
console.log(path.basename(__filename));

// Nome do Diretorio atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Criar objeto path
console.log(path.parse(__filename));

//juntar caminhos de arquivos
console.log(path.join(__dirname, "test"));
