class Cadastro{
validar(){
let nome = document.getElementById("nome").value
let email = document.getElementById("email").value
let sexo = document.querySelector("[name=sexo]:checked")
let estadoCivil = document.querySelector("[name=civil]:checked")
let curso = document.querySelectorAll("[name=curso]:checked")
let estado = document.getElementById("estado").value
let foto = document.getElementById("foto").files[0]
  
if(nome==""){
alert("Preencha o campo nome")
}
if(email==""){
alert("Preencha o campo e-mail")
}
if(sexo==null){
    alert("Preencha o campo sexo")
}
if(estadoCivil==null){
    alert("Preencha o campo Estado Civil")
}
if(curso.length==0){
    alert("Preencha o campo curso")
}
if(estado==""){
    alert("Preencha o campo estado")
}
if(foto==undefined){
    alert("Preencha o campo foto")
}
else if(foto.size>1048576){
    alert("Preencha a foto deve ter 1MB")
}else if(foto.type!="image/png" && foto.type !="image/jpeg"){
    alert("Preencha a foto em Fromato inválido")
}


}
}
var c =new Cadastro()