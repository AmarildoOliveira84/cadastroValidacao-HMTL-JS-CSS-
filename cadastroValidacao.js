class Cadastro {
    validar() {
        let nome = document.getElementById("nome").value
        let email = document.getElementById("email").value
        let sexo = document.querySelector("[name=sexo]:checked")
        let estadoCivil = document.querySelector("[name=civil]:checked")
        let curso = document.querySelector("[name=curso]:checked")
        let estado = document.getElementById("estado").value
        let foto = document.getElementById("foto").files[0]
        let nascimento = document.getElementById("data").value

        if (nome == "") {
            alert("Preencha o campo nome")
        }
        if (email == "") {
            alert("Preencha o campo e-mail")
        }
        if (sexo == null) {
            alert("Preencha o campo sexo")
        }
        if (estadoCivil == null) {
            alert("Preencha o campo Estado Civil")
        }
        if (curso == null) {
            alert("Preencha o campo curso")
        }
        if (estado == "") {
            alert("Preencha o campo estado")
        }
        if (foto == undefined) {
            alert("Preencha o campo foto")
        }
        else if (foto.size > 1048576) {
            alert("Preencha a foto deve ter 1MB")
        } else if (foto.type != "image/png" && foto.type != "image/jpeg") {
            alert("Preencha a foto em Fromato inválido")
        }
        if (nascimento == "") {
            alert("Informe a data do nascimento")
        }


    }
}
var c = new Cadastro()
