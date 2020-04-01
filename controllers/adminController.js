const path = require('path');
const fs = require('fs');


const adminController = {
    admin: (req, res) => {
        const fileNewsletter = path.join('db', 'newsletter.json');
        let listaNewsletter

        if (fs.existsSync(fileNewsletter)) {
            listaNewsletter = fs.readFileSync(fileNewsletter, {
                encoding: 'utf-8'
            });
            listaNewsletter = JSON.parse(listaNewsletter);
        };

        const fileContato = path.join('db', `contatos.json`);
        let listaContato

        if (fs.existsSync(fileContato)) {
            listaContato = fs.readFileSync(fileContato, {
                encoding: 'utf-8'
            });
            listaContato = JSON.parse(listaContato);
        };

        res.render('admin', {
            listaNewsletter,
            listaContato,
            title: 'Painel de Controle '
        });
    }

};

module.exports = adminController;