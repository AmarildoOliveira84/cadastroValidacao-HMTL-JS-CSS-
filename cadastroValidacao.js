class Cadastro {
    validar() {
        let mensagem = ""
        let nome = document.getElementById("nome").value
        let email = document.getElementById("email").value
        let sexo = document.querySelector("[name=sexo]:checked")
        let estadoCivil = document.querySelector("[name=civil]:checked")
        let curso = document.querySelector("[name=curso]:checked")
        let estado = document.getElementById("estado").value
        let foto = document.getElementById("foto").files[0]
        let nascimento = document.getElementById("data").value

        if (nome == "") {
            mensagem = "Preencha o campo nome\n"
        }
        if (email == "") {
            mensagem = mensagem + "Preencha o campo e-mail\n"
        }
        if (sexo == null) {
            mensagem = mensagem + "Preencha o campo sexo\n"
        }
        if (estadoCivil == null) {
            mensagem = mensagem + "Preencha o campo Estado Civil\n"
        }
        if (curso == null) {
            mensagem = mensagem + "Preencha o campo curso\n"
        }
        if (estado == "") {
            mensagem = mensagem + "Preencha o campo estado\n"
        }
        if (foto == undefined) {
            mensagem = mensagem + "Preencha o campo foto\n"
        }
        else if (foto.size > 1048576) {
            mensagem = mensagem + "Preencha a foto deve ter 1MB\n"
        } else if (foto.type != "image/png" && foto.type != "image/jpeg") {
            mensagem = mensagem + "Preencha a foto em Formato inválido\n"
        }
        if (nascimento == "") {
            mensagem = mensagem + "Informe a data do nascimento\n"
        }

        if (mensagem != "") {
            document.getElementById("mensagem").innerText = mensagem
        }


    }
}
var c = new Cadastro()
