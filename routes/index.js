let express = require('express');
let router = express.Router();

let homeController = require('../controllers/homeController');
let adminController = require('../controllers/adminController');
let cadastroController = require('../controllers/cadastroController');
let loginController = require('../controllers/loginController');
let auth = require('../middlewares/auth');
/* GET home page. */
router.get('/', homeController.index);

router.post('/contato', homeController.contato);

router.get('/admin', auth, adminController.admin);

router.get('/login', loginController.visualizar);
router.post('/login', loginController.login);
//router.post('/cadastroUsuario', cadastroController.salvar);

router.get('/cadastroUsuario', cadastroController.cadastro);
router.post('/cadastroUsuario', cadastroController.salvar);

router.get('/newsletter', homeController.newsletter);



module.exports = router;
