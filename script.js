document.getElementById("Form_Cadastro").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("Nome").value;
    let email = document.getElementById("Email").value;
    let telefone = document.getElementById("Telefone").value;
    let idade = document.getElementById("Idade").value;
    let peso = document.getElementById("Peso").value;
    let tipo = document.getElementById("Tipo").value;
    let estado = document.getElementById("Estado").value;
    let cidade = document.getElementById("Cidade").value;

    let info = [{
        nome: nome,
        email: email,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipo,
        telefone: telefone,
        cidade: cidade,
        estado: estado
    }];

    if (nome.length < 3) return alert("Nome Inválido");
    if (!email.includes("@")) return alert("Email Inválido");
    if (telefone.length < 8 || telefone.length > 11) return alert("Telefone Inválido");
    if (idade == "") return alert("Idade obrigatória!");
    if (idade < 16) return alert("Deve ser maior de 16!");
    if (peso == "") return alert("Peso obrigatório!");
    if (tipo == "") return alert("Tipo sanguíneo obrigatório!");
    if (estado == "") return alert("Estado obrigatório!");
    if (cidade == "") return alert("Cidade obrigatória!");
    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome:" + nome;
});

alert("Formulário enviado!");
alert(JSON.stringify(info, null, 2));