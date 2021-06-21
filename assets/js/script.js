/* palavras reservadas para criar variáveis no Java Script
var-uma variável de escopo global,ex: se eu colocar a var:nome; posso chamar ela em qualquer lugar .
let-uma variável de escopo local,ex:ele só funciona dentro das {} onde ele foi referenciado .
const-uma variável de escopo global,porém ela não muda o seu valor */

/* Case sensitive = reconhece letras maiusculas e minusculas.
posso acessar por Tag: getElementByTagNome()
posso acessar po Id:getElementById()
por nome :getElementByName()
por Classe:getElementsByClassName()
por Seletor: querySelector() Melhor pratica para acessar o Java Script
*/

/*
PRINCIPAIS EVENTOS:

onBlur  --> remove o foco do elemento
onChange --> muda o valor do elemento
onClick --> o elemento é clicado pelo usuário
onFocus --> o elemento é focado
onKeyPress --> o usuário pressiona uma tecla sobre o elemento
onLoad --> carrega o elemento por completo
onMouseOver --> define ação quando o usuário passa o mouse sobre o elemento
onMouseOut --> define ação quando o usuário retira o mouse sobre o elemento
onSubmit --> define ação ao enviar um formulário

*/


let nome = window.document.getElementById("nome") /*Get não usa #,só querySelector*/
let email = document.querySelector("#email") 
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"
/*function são as funções que o site vai ter,ela pode ter um nome ou ficar vazia*/
function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.backgroundColor = "red"
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.backgroundColor = "green"
        nomeOk = true
    }

}
function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.backgroundColor = "red"
    } else {
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.backgroundColor = "green"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.backgroundColor = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}
function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente antes de enviar...")
    }
}
function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.width = "600px"
}
function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.width = "250px"
}