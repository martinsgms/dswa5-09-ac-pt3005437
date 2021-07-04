
module.exports = app => {
    
    var Contato = app.models.contato;
    var controller = {};

    controller.listContatos = (req, res) => {
        
        Contato.find().exec().then(
            contatos => {
                res.json(contatos);
            },
            erro => {
                console.error(error)
                res.status(500).json(erro);
            }
        );
    };

    controller.getContato = (req, res) => {
        var _id = req.params.id;
        Contato.findById(_id).exec().then(
            contato => {
                if (!contato) throw new Error("Contato não encontrado");
                res.json(contato);
            },
            erro => {
                console.log(erro);
                res.status(404).json(erro);
            }
        );
    };

    controller.removeContato = (req, res) => {
        var _id = req.params.id;
        Contato.deleteOne({"_id": _id}).exec().then(
            () => {
                res.end();
            },
            erro => {
                console.error(erro);
            }
        );
    };

    controller.salvaContato = (req, res) => {
        var _id = req.body._id;
        if (_id) {
            Contato.findByIdAndUpdate(_id, req.body).exec().then(
                contato => { 
                    res.json(contato);
                },
                erro => {
                    console.error(erro)
                    res.status(500).json(erro);
                }
            );
        } else {
            Contato.create(req.body).then(
                contato => {
                    res.status(201).json(contato);
                },
                erro => {
                    console.log(erro);
                    res.status(500).json(erro);
            });
        };
    }

    return controller;
};