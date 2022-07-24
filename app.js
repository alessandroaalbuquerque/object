//Dependências
const express = require("express");
const mongoose = require("mongoose");
require("./models/Artigo");
const Artigo = mongoose.model("artigo");
const app = express();

app.use(express.json());

//Conexão com o DB
mongoose
  .connect("mongodb://localhost/celke", {})
  .then(() => {
    console.log("Conexão com o MongoDB realizada com sucesso!");
  })
  .catch((erro) => {
    console.log("Erro: Conexão com MongoDB n]ao foi realizada com sucesso!");
  });

//Rota para listar dados no MongoDB
app.get("/", (req, res) => {
  Artigo.find({})
    .then((artigo) => {
      return res.json(artigo);
    })
    .catch((erro) => {
      return res.status(400).json({
        error: true,
        message: "Nenhum artigo encontrado!",
      });
    });
});

//Rota para visualizar dados no MongoDB com condição ID
app.get("/artigo/:id", (req, res) => {
  console.log(req.params.id);

  Artigo.findOne({ _id: req.params.id })
    .then((artigo) => {
      return res.json(artigo);
    })
    .catch((erro) => {
      return res.status(400).json({
        error: true,
        message: "Nehum artigo encontrado!",
      });
    });
});

//Rota para cadastrar dados no MongoDB
app.post("/artigo", (req, res) => {
  const artigo = Artigo.create(req.body, (err) => {
    if (err)
      return res.status(400).json({
        erro: true,
        Message: "Error: Artigo não foi cadastrado com sucesso!",
      });

    return res.status(200).json({
      erro: false,
      Message: "Cadastrado com sucesso!",
    });
  });
});

//Rota para editar dados no MongoDB com condição ID
app.put("/artigo/:id", (req, res) => {
  const artigo = Artigo.updateOne({ _id: req.params.id }, req.body, (err) => {
    if (err)
      return res.status(400).json({
        erro: true,
        message: "Error: Artigo não foi editado com sucesso!",
      });

    return res.json({
      erro: false,
      message: "Artigo editado com sucesso!",
    });
  });
});

//Rota para deletar dados no MongoDB com condição ID
app.delete("/artigo/:id", (req, res) => {
  const artigo = Artigo.deleteOne({ _id: req.params.id }, req.body, (err) => {
    if (err)
      return res.status(400).json({
        erro: true,
        message: "Artigo não deletado com sucesso!",
      });

    return res.json({
      erro: false,
      message: "Artigo deletado com sucesso!",
    });
  });
});

//?
app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});
