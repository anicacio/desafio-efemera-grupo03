const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');


const cadastroController = {
    salvar: (req, res) => {
        let {
            nome,
            email,
            senha
        } = req.body;
        const fileUsuarios = path.join('db', `usuarios.json`);
        let listaUsuarios;
        let senhaCrip = bcrypt.hashSync(senha, 10);
        console.log(senhaCrip);
        if (fs.existsSync(fileUsuarios)) {
            listaUsuarios = fs.readFileSync(fileUsuarios, {
                encoding: 'utf-8'
            });
            listaUsuarios = JSON.parse(listaUsuarios);
            listaUsuarios.push({
                nome,
                email,
                senhaCrip
            });
        } else {
            listaUsuarios = [{
                nome,
                email,
                senhaCrip
            }];
        };

        listaUsuarios = JSON.stringify(listaUsuarios);
        fs.writeFileSync(fileUsuarios, listaUsuarios);

        res.render('cadastroUsuario', {
            title: 'Cadastro de Usuário'
        });
    },
    cadastro: (req, res) => {
        res.render('cadastroUsuario', {
            title: 'Cadastro de Usuário'
        });
    }

};

module.exports = cadastroController;