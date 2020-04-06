const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');


const loginController = {
    login: (req, res) => {
        let {
            email,
            senha
        } = req.body;

        const fileUsuarios = path.join('db', `usuarios.json`);
        let listaUsuarios;
        let senhaCrip = bcrypt.hashSync(senha, 10);


        listaUsuarios = fs.readFileSync(fileUsuarios, {encoding: 'utf-8'});
        listaUsuarios = JSON.parse(listaUsuarios);
        listaUsuarios.forEach(usuario => {
            console.log('Opa, deu certo, ou quase' + " " + usuario.email + " " + email + " " + senhaCrip + " " + usuario.senhaCrip);
            
            if(usuario.email == email && bcrypt.compareSync(senha, usuario.senhaCrip)){
                console.log('Opa, deu certo, ou quase');
                req.session.usuario = usuario;
                res.redirect('/admin');
            }
            // if(usuario.email != email) {
            //     return res.send("Usuário inválido" + usuario.email + email)
            // }
            // if(!bcrypt.compareSync(senhaCrip, usuario.senhaCrip)) {
            //     return res.send("Senha inválido") 
            // }
        })
        res.render('login', {
            title: 'Tela de login', 
            error: true
        });
    },

    visualizar: (req, res) => {
        res.render('login', {
            title: 'Tela de login',
            error: false
        });
    }

};

module.exports = loginController;