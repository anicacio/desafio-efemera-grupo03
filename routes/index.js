let express = require('express');
let router = express.Router();

let homeController = require('../controllers/homeController');
let adminController = require('../controllers/adminController');
let cadastroController = require('../controllers/cadastroController');

/* GET home page. */
router.get('/', homeController.index);

router.post('/contato', homeController.contato);

router.get('/admin', adminController.admin);

router.get('/cadastroUsuario', cadastroController.cadastro);
router.post('/cadastroUsuario', cadastroController.salvar);

router.get('/newsletter', homeController.newsletter);



module.exports = router;
