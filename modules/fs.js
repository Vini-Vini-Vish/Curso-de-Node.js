const { error } = require("console");
const fs = require("fs");
const path = require("path");

// Criar uma pasta
fs.mkdir(path.join(__dirname, "/test"), (erro) => {
  if (error) {
    return console.log("Erro", error);
  }

  console.log("Pasta criado com sucesso");
});

// Criar um arquivo e escrever nele
fs.writeFile(
  path.join(__dirname, "test", "test.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro", error);
    }

    console.log("arquivo criado com sucesso");

    // Adicionar a um arquivo
    fs.appendFile(
      path.join(__dirname, "test", "test.txt"),
      "hello world",
      (error) => {
        if (error) {
          return console.log("Erro", error);
        }

        console.log("arquivo modificado com sucesso");
      }
    );

    // Ler arquivos
    fs.readFile(
      path.join(__dirname, "test", "test.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro", error);
        }

        console.log(data);
      }
    );
  }
);
