//Importa o módulo Router do express
//Router será utilizada para definir rotas específicas
const router = require('express').Router();

const controllerNumbers = require("../controllers/controllerNumbers"); //cd .. neste caso só os pontos

router.post("/par/", controllerNumbers.checkPar); // /par/ rota
router.post("/par/", controllerNumbers.checkPrimo); //subrota

module.exports = router
