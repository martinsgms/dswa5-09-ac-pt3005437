var ID_CURSO_INC = 4;

var cursos = [
    { _id: 1, curso: "Engenharia de Produção", coordenador: "fabio.teixeira@ifsp.edu.br" },
    { _id: 2, curso: "Tecnologia em Análise e Desenvolvimento de Sistemas", coordenador: "fabiano.teixeira@ifsp.edu.br" }, 
    { _id: 3, curso: "Licenciatura em Letras Português/Inglês", coordenador: "melissa.teixeira@ifsp.edu.br" }, 
    { _id: 4, curso: "Tecnologia em Gestão Pública", coordenador: "melissa.teixeira@ifsp.edu.br" }
];

module.exports =  ()  => {
    var controller = {};

    controller.listCursos = (req, res) => {
        res.json(cursos);
    };

    controller.getCurso = (req, res) => {
        console.log('Selecionou o Curso: ' + req.params.id);

        let idCurso = req.params.id;
        let curso = cursos.filter(curso => curso._id == idCurso)[0];

        curso ? res.json(curso) : res.status(404).send('Curso não encontrado!');
    };

    controller.removeCurso = function(req, res) {
        let idCurso = req.params.id;
        cursos = cursos.filter(c => c._id != idCurso);
        
        res.send(204).end();
    };

    controller.salvaCurso = function(req, res) {
        var curso = req.body;
        curso = curso._id ? atualiza(curso) : adiciona(curso);
        res.json(curso);
    };

    function adiciona(cursoNovo) {
        cursoNovo._id = ++ID_CURSO_INC;
        cursos.push(cursoNovo);
        return cursoNovo;
    }

    function atualiza(cursoAlterar) {
        cursos = cursos.map(function(curso) {
            if (curso._id == cursoAlterar._id) {
                curso = cursoAlterar;
            }
            return curso;
        });

        return cursoAlterar;
    }

    return controller;
};