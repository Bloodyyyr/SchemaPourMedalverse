require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const MUUID = require('uuid-mongodb');
const cors = require("cors");

const { Categorie } = require("./Schema/catagorieSchema.js");
const { Epreuve } = require("./Schema/epreuveSchema.js");
const { Evenement } = require("./Schema/evenementSchema.js");
const { Medaille } = require("./Schema/medailleSchema.js");
const { Minted } = require("./Schema/mintedSchema.js");
const { MVMinted } = require("./Schema/mvMinted.js");
const { Organisateur } = require("./Schema/organisateurSchema.js");
const { PolygonNFTTransfers } = require("./Schema/polygonNFTTransfers.js");
const { PolygonTransactions } = require("./Schema/polygonTransaction.js");
const { Sexe } = require("./Schema/sexeSchema.js");
const { Sportif } = require("./Schema/sportifSchema.js");
const { Sport } = require("./Schema/sportSchema.js");
const { Type } = require("./Schema/typeSchema.js");
 
const PORT = process.env.PORT || 5000;
const BDD = process.env.BDD 


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

app.route("/categorie")
  .get(function (req, res) {
    Categorie.find({}, function(err, categorie) {
      if (err) {
        console.log(err);
      }else {
        console.log(categorie)
      }
    })
  })
  .post(function (req, res) {
    Categorie.create({
      _id : MUUID.v4().toString('N'),
      nbrParticipants: req.body.nbrParticipants
    })
    console.log(res)
    console.log("Post");
  })

app.route("/categorie/:id")
  .get(function (req, res) { 
      Categorie.findOne({ _id: req.params.id }, function(err, categorie) {
        if (err) {
          console.log(err);
        }else {
          console.log(categorie)
        }
      })
  })

app.route("/epreuve")
  .get(function (req, res) {
    Epreuve.find({}, function(err, epreuve) {
      if (err) {
        console.log(err);
      }else {
        console.log(epreuve)
      }
    })
  })

app.route("/epreuve/:id")
  .get(function (req, res) { 
    Epreuve.findOne({ _id: req.params.id }, function(err, epreuve) {
        if (err) {
          console.log(err);
        }else {
          console.log(epreuve)
        }
      })
  })

app.route("/evenement")
  .get(function (req, res) {
    Evenement.find({}, function(err, evenement) {
      if (err) {
        console.log(err);
      }else {
        console.log(evenement)
      }
    })
  })

app.route("/evenement/:id")
  .get(function (req, res) { 
    Evenement.findOne({ _id: req.params.id }, function(err, evenement) {
        if (err) {
          console.log(err);
        }else {
          console.log(evenement)
        }
      })
  })

app.route("/medaille")
  .get(function (req, res) {
    Medaille.find({}, function(err, medaille) {
      if (err) {
        console.log(err);
      }else {
        console.log(medaille)
      }
    })
  })

app.route("/medaille/:id")
  .get(function (req, res) { 
    Medaille.findOne({ _id: req.params.id }, function(err, medaille) {
        if (err) {
          console.log(err);
        }else {
          console.log(medaille)
        }
      })
  })

app.route("/minted")
  .get(function (req, res) {
    Minted.find({}, function(err, minted) {
      if (err) {
        console.log(err);
      }else {
        console.log(minted)
      }
    })
  })

app.route("/minted/:id")
  .get(function (req, res) { 
    Minted.findOne({ _id: req.params.id }, function(err, minted) {
        if (err) {
          console.log(err);
        }else {
          console.log(minted)
        }
      })
  })

app.route("/mvminted")
  .get(function (req, res) {
    MVMinted.find({}, function(err, mvMinted) {
      if (err) {
        console.log(err);
      }else {
        console.log(mvMinted)
      }
    })
  })

app.route("/mvminted/:to")
  .get(function (req, res) {
    MVMinted.find({to: req.params.to}, function(err, MVMinted) {
      if(err){
        console.log(err);
      }else{
        console.log(MVMinted._id)
      }
    })
  })

app.route("/mvminted/:id")
  .get(function (req, res) { 
    MVMinted.findOne({ _id: req.params.id }, function(err, mvMinted) {
        if (err) {
          console.log(err);
        }else {
          console.log(mvMinted)
        }
      })
  })

app.route("/organisateur")
  .get(function (req, res) {
    Organisateur.find({}, function(err, organisateur) {
      if (err) {
        console.log(err);
      }else {
        console.log(organisateur)
      }
    })
  })

app.route("/organisateur/:id")
  .get(function (req, res) { 
    Organisateur.findOne({ _id: req.params.id }, function(err, organisateur) {
        if (err) {
          console.log(err);
        }else {
          console.log(organisateur)
        }
      })
  })

app.route("/polygonNFTTransfers")
  .get(function (req, res) {
    PolygonNFTTransfers.find({}, function(err, polygonNFTTransfers) {
      if (err) {
        console.log(err);
      }else {
        console.log(polygonNFTTransfers)
      }
    })
  })

app.route("/polygonNFTTransfers/:id")
  .get(function (req, res) { 
    PolygonNFTTransfers.findOne({ _id: req.params.id }, function(err, polygonNFTTransfers) {
        if (err) {
          console.log(err);
        }else {
          console.log(polygonNFTTransfers)
        }
      })
  })

app.route("/polygonTransactions")
  .get(function (req, res) {
    PolygonTransactions.find({}, function(err, polygonTransactions) {
      if (err) {
        console.log(err);
      }else {
        console.log(polygonTransactions)
      }
    })
  })

app.route("/polygonTransactions/:id")
  .get(function (req, res) { 
    PolygonTransactions.findOne({ _id: req.params.id }, function(err, polygonTransactions) {
        if (err) {
          console.log(err);
        }else {
          console.log(polygonTransactions)
        }
      })
  })

app.route("/sexe")
  .get(function (req, res) {
    Sexe.find({}, function(err, sexe) {
      if (err) {
        console.log(err);
      }else {
        console.log(sexe)
      }
    })
  })

app.route("/sexe/:id")
  .get(function (req, res) { 
    Sexe.findOne({ _id: req.params.id }, function(err, sexe) {
        if (err) {
          console.log(err);
        }else {
          console.log(sexe)
        }
      })
  })

app.route("/sportif")
  .get(function (req, res) {
    Sportif.find({}, function(err, sportif) {
      if (err) {
        console.log(err);
      }else {
        console.log(sportif)
      }
    })
  })

app.route("/sportif/:id")
  .get(function (req, res) { 
    Sportif.findOne({ _id: req.params.id }, function(err, sportif) {
        if (err) {
          console.log(err);
        }else {
          console.log(sportif)
        }
      })
  })

app.route("/sport")
  .get(function (req, res) {
    Sport.find({}, function(err, sport) {
      if (err) {
        console.log(err);
      }else {
        console.log(sport)
      }
    })
  })
  
app.route("/sport/:id")
  .get(function (req, res) { 
    Sport.findOne({ _id: req.params.id }, function(err, sport) {
        if (err) {
          console.log(err);
        }else {
          console.log(sport)
        }
      })
  })

app.route("/type")
  .get(function (req, res) {
    Type.find({}, function(err, type) {
      if (err) {
        console.log(err);
      }else {
        console.log(type)
      }
    })
  })

app.route("/type/:id")
  .get(function (req, res) { 
    Type.findOne({ _id: req.params.id }, function(err, type) {
        if (err) {
          console.log(err);
        }else {
          console.log(type)
        }
      })
  })

mongoose.connect(BDD, {
  autoIndex: true
});
app.listen(PORT, function () {
  console.log(`Le serveur express est en route sur le port: http://localhost:${PORT}`);
});

