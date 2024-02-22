const aluno1 = {
    nome: "Guilherme Godinho Vianna",
    idade: 18,
    cursando: ["HIS","GEO","MAT","PORT"],
    presença: 10,
    ra: "221026269"
};

const aluno2 = {
    nome: "Claudio",
    idade: 12,
    cursando: ["PDM","TIA"],
    presença: 1,
    ra: "12345"
};

    console.log(aluno1.nome)
    console.log(aluno1.idade)
    console.log(aluno1.cursando)
    console.log(aluno1.presença)
    console.log(aluno1.ra)

    console.log(aluno2.nome)
    console.log(aluno2.idade)
    console.log(aluno2.cursando)
    console.log(aluno2.presença)
    console.log(aluno2.ra)

    if(aluno1.nome < 10){
        console.log("Números de caracteres faltando!")
    }; 

    if(aluno1.idade < 14) {
        console.log("Idade insuficiente!")
    }; 

    if(aluno1.cursando < 3) {
        console.log("Cursos insuficientes!")
    };

    if(aluno1.presença < 2) {
        console.log("Faltou pra caralho!")
    };
    if(aluno1.ra < 7) {
        console.log("Falta caracteres!")        
    };
    
    function validaCadastro(aluno1) {  //Está validando o cadastro desse aluno
        status: "valido",
       
        aluno1; {
        nome; "Guilherme Godinho Vianna",
        idade; 18,
        cursando; ["HIS","GEO","MAT","PORT"],
        presença; 10,
        ra; "221026269",
        message; "Cadastro válido"
        };
    }
    function validaCadastro(aluno2) {  //Está validando o cadastro desse aluno
        status: "inválido",
        aluno2; {
        nome: "Claudio",
        idade; 12,
        cursando; ["PDM","TIA"],
        presença; 1,
        ra; "12345",
        message; "Cadastro inválido"
        };
    }

    console.log(aluno1.validaCadastro)
    console.log(aluno2.validaCadastro)
