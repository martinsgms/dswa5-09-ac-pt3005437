
module.exports =  app => {

    var Curso = app.models.curso;
    var controller = {};

    controller.listCursos = (req, res) => {

        Curso.find().exec().then(
            cursos => {
                res.json(cursos);
            },
            erro => {
                console.error(error);
                res.status(500).json(erro);
            }
        );
    };

    controller.getCurso = (req, res) => {
        var _id = req.params.id;
        Curso.findById(_id).exec().then(
            curso => {
                if (!curso) throw new Error("Curso não encontrado");
                res.json(curso);
            },
            erro => {
                console.log(erro);
                res.status(404).json(erro);
            }
        );
    };

    controller.removeCurso = (req, res) => {
        var _id = req.params.id;
        Curso.deleteOne({"_id": _id}).exec().then(
            () => {
                res.end();
            },
            erro => {
                console.error(erro);
            }
        );
    };

    controller.salvaCurso = (req, res) => {
        var _id = req.body._id;
        if (_id) {
            Curso.findByIdAndUpdate(_id, req.body).exec().then(
                curso => { 
                    res.json(curso);
                },
                erro => {
                    console.error(erro)
                    res.status(500).json(erro);
                }
            );
        } else {
            Curso.create(req.body).then(
                curso => {
                    res.status(201).json(curso);
                },
                erro => {
                    console.log(erro);
                    res.status(500).json(erro);
            });
        };
    }

    return controller;
};