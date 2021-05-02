var contatos = [
    { _id: 1, nome: 'Gabriel Martins', email: 'gabriel.martins@ifsp.edu.br' },
    { _id: 2, nome: 'Maria Aparecida', email: 'maria.aparecida@ifsp.edu.br' },
    { _id: 3, nome: 'João Teixeira', email: 'joao.teixeira@ifsp.edu.br' }
]

module.exports = () => {
    var controller = {};

    controller.listContatos = (req, res) => {
        res.json(contatos);
    };

    controller.getContato = (req, res) => {
        console.log('Selecionou o contato: ' + req.params.id);

        let idContato = req.params.id;
        let contato = contatos.filter(contato => contato._id == idContato)[0];

        contato ? res.json(contato) : res.status(404).send('Contato não encontrado!');
    };

    controller.removeContato = function(req, res) {
        let idContato = req.params.id;
        contatos = contatos.filter(c => c._id != idContato);

        res.send(204).end();
    };

    return controller;
};