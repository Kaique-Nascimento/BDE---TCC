function passaTela(){
    var pesquisa = document.getElementById('pesquisa').value;
window.location.href="livros.html?pesquisa="+pesquisa;            
}
            const imagem = document.querySelector("#arquivo");
            const texto = document.querySelector("#fileMessage");
            imagem.addEventListener("change", (event) => {
              const imagem_preview =
                document.querySelector("#preview");
              if (imagem_preview) {
                imagem_preview.remove();
              }
              const preview = document.createElement("img");
              const reader = new FileReader();
              reader.onload = function (event) {
                preview.width = 110;
                preview.height = 100;
                preview.id = "preview";
                preview.src = event.target.result;
                texto.insertAdjacentElement("afterend", preview);
              };
              reader.readAsDataURL(imagem.files[0]);
            });
            function handleCheckboxChange(checkbox) {
                var dataFalecimentoInput =
                  document.getElementById("data_falecimento");

                if (checkbox.checked) {
                  dataFalecimentoInput.value = "0000";
                  dataFalecimentoInput.disabled = true;
                  dataFalecimentoInput.style.color = "gray";
                } else {
                  dataFalecimentoInput.value = "";
                  dataFalecimentoInput.disabled = false;
                  dataFalecimentoInput.style.color = "";
                }
              }
               
function checkInput(element) {
    if (element.value.trim() !== "") {
      element.classList.add("has-text");
    } else {
      element.classList.remove("has-text");
    }
  }
var logado = "";
window.addEventListener("load", (event) => {
logado = sessionStorage.getItem("logado");
var login = document.querySelector('#logadinho');
if(logado == "sim"){
mostraLogin();
login.style.display = 'none';
}
else{
escondeLogin();
login.style.display = 'block';
}
});
function sair() {
if (confirm("Tem certeza que deseja sair da conta?")) {
sessionStorage.clear();
location.reload();
sessionStorage.setItem("logado", "nao");
}
}
function escondeLogin() {
var escondidos = document.getElementsByClassName("escondido");
for (var i = 0; i < escondidos.length; ++i) {
escondidos[i].style.display = "none";
}
}
function mostraLogin() {
var escondidos = document.getElementsByClassName("escondido");
for (var i = 0; i < escondidos.length; ++i) {
escondidos[i].style.display = "block";
}
}
function apagarConta() {
var rm = sessionStorage.getItem("rm");
var url = "php/categorias/categoria_excluir.php?codigo=" + rm;
if (confirm("Deseja apagar essa conta?" + rm)) {
fetch(url)
.then((response) => response.json())
.then((data) => {
sessionStorage.clear();
location.reload();
sessionStorage.setItem("logado", "nao");
});
}
}
function modalEmail() {
document.getElementById("email");
var myModal = new bootstrap.Modal(
document.getElementById("email_modal")
);
myModal.show();
nome = sessionStorage.getItem("nome");
email = sessionStorage.getItem("email");
rm = sessionStorage.getItem("rm");
var email_atualizado = (document.getElementById(
"email_atualizado"
).value = email);
var nome_atualizado = (document.getElementById(
"nome_atualizado"
).value = nome);
var codigo_cara = (document.getElementById("codigo_cara").value = rm);
}
function atualizaEmail() {
var email = document.getElementById("email_atualizado").value;
var nome = document.getElementById("nome_atualizado").value;
var rm = document.getElementById("codigo_cara").value;
var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (
email.match(emailFormat) &&
nome != null &&
nome != "" &&
email != null &&
email != ""
) {
url = `php/usuarios/usuario_editar.php?nome=${nome}&email=${email}&rm=${rm}`;
fetch(url)
.then((response) => response.json())
.then((data) => {
console.log(data);
alert(data.mensagem);
sessionStorage.setItem("nome", nome);
sessionStorage.setItem("email", email);
});
} else {
alert("Preencha todos os campos!");
}
}
var linkTema = document.getElementById("css-tema");
var icone = document.getElementById("icone-tema");
var img = document.getElementById("img-tema");
var temaClaro = "css/css.css";
var temaEscuro = "css/escuro.css";

function mudarParaClaro() {
sessionStorage.setItem("tema", "claro");
linkTema.href = "css/css.css";
icone.className = "fa-solid fa-2x fa-sun";
img.src = "img/logo/claro.png";
}

function mudarParaEscuro() {
sessionStorage.setItem("tema", "escuro");
linkTema.href = "css/escuro.css";
icone.className = "fa-solid fa-2x fa-moon";
img.src = "img/logo/escuro.png";
}

icone.addEventListener("click", function () {
if (tema.checked) {
tema.checked = false;
mudarParaEscuro();
} else {
tema.checked = true;
mudarParaClaro();
}
});
function cadastrarFoto() {
const formData = new FormData();
var foto = document.getElementById("arquivo").files[0];
var codigo = document.getElementById("codigo_livro").value;

formData.append("codigo", codigo);
formData.append("arquivo", foto);
url = `php/livros/foto_cadastro.php`;

fetch(url, {
method: "POST",
body: formData,
})
.then((response) => response.json())
.then((data) => {
console.log(data);
alert(data.mensagem);
carregarLivros();
})
.catch((error) => {
console.error("Erro na requisição fetch:", error);
});
}
function cadastrarPdf() {
const formData = new FormData();
var pdf = document.getElementById("arquivo2").files[0];
var codigo = document.getElementById("codigo_livro").value;

formData.append("codigo", codigo);
formData.append("arquivo", pdf);
url = `php/livros/pdf_cadastro.php`;

fetch(url, {
method: "POST",
body: formData,
})
.then((response) => response.json())
.then((data) => {
console.log(data);
alert(data.mensagem);
carregarLivros();
})
.catch((error) => {
console.error("Erro na requisição fetch:", error);
});
}
if (sessionStorage.getItem("tema") === "escuro") {
mudarParaEscuro();
} else {
mudarParaClaro();
}
function sacrificio() {
var url = "php/categorias/categoria.php";

fetch(url)
.then((response) => response.json())
.then((data) => {
console.log(data);
var options = "";
for (let item in data) {
options += `<option value="${data[item].tb04_nome_categoria}" name="${data[item].tb04_nome_categoria}">${data[item].tb04_nome_categoria}</option>`; 
}

document.querySelector("#selectoption_categoria").innerHTML =
options;
});
}
window.addEventListener("load", (event) => {
optionPeriodo();
sacrificio();
carregarLivros();
});
function optionPeriodo() {
var url = "php/periodos/periodo.php";

fetch(url)
.then((response) => response.json())
.then((data) => {
console.log(data);
var options = "";
for (let item in data) {
options += `
<option value="${data[item].tb05_nome_periodo}" name="${data[item].tb05_nome_periodo}">${data[item].tb05_nome_periodo}</option>`;
}

var selectElement = (document.querySelector(
"#option_periodo"
).innerHTML = options);
});
}
function modalPeriodo() {
var myModal = new bootstrap.Modal(
document.getElementById("periodo_modal")
);
myModal.show();
}
function modalCategoria() {
document.getElementById("categoria");
var myModal = new bootstrap.Modal(
document.getElementById("categoria_modal")
);
myModal.show();
}
function analisePdf(pdf) {
if (pdf === "sem.pdf") {
alert("Nenhum PDF cadastrado!");
return false;
} else {
alert(`Baixando: ${pdf}!`);
return true;
}
}
function analiseImg(img, pdf) {
if (img === "sem.png") {
alert("Nenhum PDF cadastrado!");
return false;
} else {
window.open("pdf/" + pdf, "_blank");
}
}      
function carregarLivros() {
var queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var codigo = urlParams.get("codigo");
var sala = urlParams.get("sala");
var categoria = urlParams.get("categoria");
var periodo = urlParams.get("periodo");
var autor = urlParams.get("autor");
document.getElementsByName("codigo_livro").value = codigo;

var url = `php/livros/livro_selecionado.php?codigo=${codigo}`;

var informacoes = "";
fetch(url)
.then((response) => response.json())
.then((data) => {
console.log(data);
for (let item in data) {
a = `${data[item].tb01_pdf}`;
if (logado == "sim") {
  informacoes += `
 <div class="row">
<div class="col-md-2 text-left ">
<img src="img/livros/${data[item].tb01_ftcapa}" 
style="max-width: 100%; padding-top: 100px; cursor: pointer" 
alt="${data[item].tb01_nome_livro}" 
onclick="analiseImg('${data[item].tb01_ftcapa}','${data[item].tb01_pdf}')">
<a href="pdf/${data[item].tb01_pdf}" download="${data[item].tb01_pdf}">
<button class="download" onclick="return analisePdf('${data[item].tb01_pdf}')">
<i class="fa-solid fa-download"></i>
</button>
</a>

    <div class="d-flex flex-column align-items-center">

  <div class="row">

    <div class="col-md-6">
      <a href="#" onclick="editarFoto(${data[item].tb01_id_livro})"class="icone"><br>
<i class="fa-solid fa-2x fa-image"></i></a>
      </div>
    <div class="col-md-6">
      <a href="#" onclick="editarPdf(${data[item].tb01_id_livro})"class="icone"><br>
<i class="fa-sharp fa-2x fa-solid fa-file-pdf"></i></a>
      </div>
 </div>
</div> 
</div>
<div class="col-md-8" style="padding-top: 100px;">
<div class="row">
  <div class="col-md-4">
    <h3 class="titulo" style="word-break: keep-all";>${data[item].tb01_nome_livro}
      
      
      <input type="text"id="nome_editado"
      onkeydown="handleKeyDown(event)"
onpaste="handlePaste(event)"
      oninput="limitarCaracteres(this, 50, 'mensagemNome')"
      style="margin-top:10px">
      <div id="mensagemNome" style="color: red;"></div>

      </h3>
  </div>
  <div class="col-md-4">
    <button class="btniconedt" style="margin-left:90%" 
    onclick="mostraCampos(${data[item].tb01_id_livro}, '${data[item].tb01_nome_livro}',
    '${data[item].tb01_editora}','${data[item].tb01_data}',
    '${data[item].tb01_sinopse}','${data[item].tb04_nome_categoria}',
    '${data[item].tb05_nome_periodo}','${data[item].tb03_nome_autor}',
    '${data[item].tb01_classificacao_indicativa}',
    ${data[item].tb06_id})">
      <i class="fas fa-edit fa-2x icone edt">            
         </i>
    </button>
         </div>
  <div class="col-md-4">
    <button class="btnicon"
    onclick="apagarLivro(${data[item].tb01_id_livro}, '${data[item].tb01_nome_livro}')">
      <i class="fa-solid fa-2x fa-trash" style="color: #ed0c0c;">
     </button></i>              
    </div>
  
</div>


<h6>Por <a href="telaAutores.html?codigo=${data[item].tb01_id_autor}">${data[item].tb03_nome_autor}</a>

<select name="select" id="select_autor_editado">

</select>      (autor)</h6><br>
<a href="#" onclick="modalAutor()">
            <button id="botao_autor_editado" class="btn btn-primary cadastro" style="color: white">
              Cadastrar novo Autor
            </button>
          </a><br>
<h5 style="word-break: break-all" style="margin-right:-20% ">
${data[item].tb01_sinopse}
<textarea
      rows="5"
      cols="200"
      id="sinopse_editada"
        onkeydown="handleKeyDown(event)"
onpaste="handlePaste(event)"

      oninput="limitarCaracteres(this, 800, 'mensagemSinopse')"
    ></textarea>
    <div id="mensagemSinopse" style="color: red;"></div>


</h5>
<div class="row" id="colicon" style=" white-space: nowrap;">
<div class="col"style="max-width:200px">
<h6>Editora</h6>
<i class="fa-solid  fa-2x fa-building" style="color: #1B69A6;"></i>
<h6 id="subtitulo">${data[item].tb01_editora}

<input type="text"id="editora_editada"
onkeydown="handleKeyDown(event)"
onpaste="handlePaste(event)"
oninput="limitarCaracteres(this, 60, 'mensagemEditora')"
style="width:100%; margin-left:15%">
<div id="mensagemEditora" style="color: red;"></div>
</h6>
</div>
<div class="col"style="max-width:150px">
<h6> Categoria </h6>
<i class="fas fa-2x fa-list-alt" aria-hidden="true" style="color: #1B69A6;"></i>
<h6 id="subtitulo">${data[item].tb04_nome_categoria}

<select name="select" id="select_categoria_editada"style="margin-left:27%; width:70%">

</select> </h6><br>
<a href="#" onclick="modalCategoria()">
            <button  id="botao_categoria_editada"class="btn btn-primary cadastro"style="font-size: 10px; margin-left:13%; margin-top:-12%;color:white">
              Nova categoria
            </button>
          </a>
</div>
<div class="col"style="max-width:200px">
<h6>Período</h6>
<i class="fas fa-2x fa-list-alt" aria-hidden="true" style="color: #1B69A6;"></i>
<h6 id="subtitulo">${data[item].tb05_nome_periodo}

<select name="select" id="select_periodo_editado"style="width:60%; margin-left:8% ">

</select> </h6><br>
<a href="#" onclick="modalPeriodo()">
            <button id="botao_periodo_editado" class="btn btn-primary cadastro"style="font-size:10px;margin-left:18%; margin-top:-12%;color:white">
               Novo período
            </button>
          </a>
</div>

<div class="col"style="max-width:200px;">
<h6>Data</h6>
<i class="fa-solid fa-2x fa-calendar" style="color: #1B69A6;"></i>
<h6 id="subtitulo">${data[item].tb01_data_formatada}

<input type="date" id="data_editada">


</h6>
</div>
<div class="col"style="max-width:200px;">
<h6> Classificação</h6>
<i class="fa-solid   fa-2x fa-child"style="color: #1B69A6; "></i>
<h6 id="subtitulo">${data[item].tb01_classificacao_indicativa}

<select name="select" id="select_classificacao_editada"style="margin-left:38%">
<option id="livre" value="Livre">Livre</option>
<option id="dez" value="+10 anos">10 Anos</option>
<option id="doze" value="+12 anos">12 Anos</option>
<option id="quatorze" value="+14 anos">14 Anos</option>
<option id="quatorze" value="+16 anos">16 Anos</option>
<option id="dezoito" value="+18 anos">18 Anos</option>
</select> 
</h6>
</div>
<h1> Sala: ${data[item].tb06_ano}- ${data[item].tb06_nome}</h1>
    <select name="select" id="select_sala_editada"style="width:40%;margin-left:18%">
      <option id="sem" value="13"> Sem sala </option>
      <option class="read-only" value="Sem sala"> Fundamental 1 </option>
          <option id="F11ano" value="1">1° Ano</option>
          <option id="F12ano" value="2">2° Ano</option>
          <option id="F13ano" value="3">3° Ano</option>
          <option id="F14ano" value="4">4° Ano</option>
          <option id="F15ano" value="5">5° Ano</option>
          <option class="read-only" value="Sem sala"> Fundamental 2 </option>
          <option id="F26ano" value="6">6° Ano</option>
          <option id="F27ano" value="7">7° Ano</option>
          <option id="F28ano" value="8">8° Ano</option>
          <option id="F29ano" value="9">9° Ano</option>
                  <option class="read-only" value="Sem sala"> Ensino Médio </option>
          <option id="M1ano" value="10">1° Ano</option>
          <option id="M2ano" value="11">2° Ano</option>
          <option id="M3ano" value="12">3° Ano</option>

        </select>
</div>
</div> 
<div class="row">
<div class="col-6">
<center>
<button class="btn btn-primary" onclick="editarLivro()" id="botao_editar"style="margin-left:70%;color:white"> Atualizar </button></div>
<div class="col-6">
<button class="btn btn-primary"                   
onclick="someCampos()" id="botao_cancelar"style="color:white"> Cancelar </button>
</div>
</center>
</div>
</div>
<input type="hidden" name="codigo_livro" id="codigo_livro">
`;
} else {
  informacoes += `
 <div class="row">
  <div class="col-md-2 text-left ">
<img src="img/livros/${data[item].tb01_ftcapa}" 
style="max-width: 100%; padding-top: 100px; cursor: pointer" 
alt="${data[item].tb01_nome_livro}" 
onclick="analiseImg('${data[item].tb01_ftcapa}','${data[item].tb01_pdf}')">
<a href="pdf/${data[item].tb01_pdf}" download="${data[item].tb01_pdf}">
<button class="download" onclick="return analisePdf('${data[item].tb01_pdf}')">
<i class="fa-solid fa-download"></i>
</button>
</a>
    <div class="d-flex flex-column align-items-center">
</div> 
</div>
<div class="col-md-8" style="padding-top: 100px;">
<div class="row">
  <div class="col-md-4">
    <h3 class="titulo"style="word-break: keep-all;">${data[item].tb01_nome_livro}
      
                        
      </h3>
  </div>
</div>


<h6>Por <a href="telaAutores.html?codigo=${data[item].tb01_id_autor}">${data[item].tb03_nome_autor}</a>

(autor)</h6><br><br>
<h5 style="word-break: break-all">
${data[item].tb01_sinopse}
</h5>
<div class="row" id="colicon" style=" white-space: nowrap;">
<div class="col">
<h6> Editora</h6>
<i class="fa-solid  fa-2x fa-building" style="color: #1B69A6;"></i>
<h6 id="subtitulo">${data[item].tb01_editora}
</h6>
</div>
<div class="col">
<h6> Categoria </h6>
<i class="fas fa-2x fa-list-alt" aria-hidden="true" style="color: #1B69A6;"></i>
<h6 id="subtitulo">${data[item].tb04_nome_categoria}


</h6><br>

</div>
<div class="col">
<h6> Período </h6>
<i class="fas fa-2x fa-list-alt" aria-hidden="true" style="color: #1B69A6;"></i>
<h6 id="subtitulo">${data[item].tb05_nome_periodo}
</h6><br>

</div>

<div class="col">
<h6>Data </h6>
<i class="fa-solid fa-2x fa-calendar" style="color: #1B69A6;"></i>
<h6 id="subtitulo">${data[item].tb01_data_formatada}
</h6>
</div>
<div class="col">
<h6> Classificação</h6>
<i class="fa-solid   fa-2x fa-child"style="color: #1B69A6; "></i>
<h6 id="subtitulo">${data[item].tb01_classificacao_indicativa}

</h6>
</div>
<h1> Sala: ${data[item].tb06_nome} </h1>
</div>
</div> 
</div>
`;
}
}

document.querySelector(".container").innerHTML = informacoes;

})

.catch((error) => {
console.error("Erro na requisição fetch:", error);
});
}
let lastKeyWasSpace = false;
function handleKeyDown(event) {
if (event.key === 'Enter') {
event.preventDefault();
} else if (event.key === ' ') {
if (lastKeyWasSpace) {
event.preventDefault();
}
lastKeyWasSpace = true;
} else {
lastKeyWasSpace = false;
}
}

function handlePaste(e) {
e.preventDefault();
var text = (e.originalEvent || e).clipboardData.getData('text/plain');
text = text.replace(/\r?\n/g, ' '); 
text = text.replace(/\s+/g, ' '); 
document.execCommand('insertText', false, text);
lastKeyWasSpace = false;
}
function editarFoto(codigo) {
document.getElementById("codigo_livro").value = codigo;
modalImagem();
}
function editarPdf(codigo) {
document.getElementById("codigo_livro").value = codigo;
modalPdf();
}
function limitarCaracteres(elemento, maxCaracteres, elementoMensagem) {
    var texto = "Limite de caracteres excedido.";
    if (elemento.value.length > maxCaracteres) {
      elemento.value = elemento.value.substring(0, maxCaracteres);
      document.getElementById(elementoMensagem).textContent =
        "Limite de caracteres excedido.";
    } else {
      document.getElementById(elementoMensagem).textContent = "";
    }
  }
function modalImagem() {
var myModal = new bootstrap.Modal(
document.getElementById("imagem_modal")
);
myModal.show();
}
function modalPdf() {
var myModal = new bootstrap.Modal(document.getElementById("pdf_modal"));
myModal.show();
}
document.addEventListener("DOMContentLoaded", function () {
const fileInputs = document.querySelectorAll('.custom-file-upload input[type="file"]');
const fileMessage = document.querySelector(".file-message");
const fileMessage2 = document.querySelector(".file-message2");
var foto = document.querySelector("#cad_foto");
var pdf = document.querySelector("#cad_pdf");

function handleFileChange(event) {
const fileInput = event.target;
if (fileInput.files.length > 0) {
const fileName = fileInput.files[0].name;
const fileExtension = fileName.split(".").pop().toLowerCase();
const allowedImageExtensions = ["jpg", "jpeg", "png", "jfif"];
const allowedPDFExtensions = ["pdf"];

if (fileInput.id === "arquivo") {
if (allowedImageExtensions.includes(fileExtension)) {
fileMessage.innerHTML = `Imagem "${fileName}" enviada com sucesso!`;
fileMessage.style.color = "green";
foto.style.display="block";
} else {
fileMessage.innerHTML = "Apenas imagens (jpg, jpeg, png, jfif) são permitidas.";
fileMessage.style.color = "red";
fileInput.value = "";
foto.style.display="none";
}
} else if (fileInput.id === "arquivo2") {
if (allowedPDFExtensions.includes(fileExtension)) {
fileMessage2.innerHTML = `Arquivo PDF "${fileName}" enviado com sucesso!`;
fileMessage2.style.color = "green";
pdf.style.display="block";

} else {
fileMessage2.innerHTML = "Apenas arquivos PDF são permitidos.";
fileMessage2.style.color = "red";
fileInput.value = "";
pdf.style.display="none";

}
}

fileMessage.style.display = "block";
} else {
fileMessage.style.display = "none";
}
}

fileInputs.forEach((input) => {
input.addEventListener("change", handleFileChange);
});

});
function editarLivro() {
const formData = new FormData();

var codigo = document.getElementById("codigo_livro").value;
var nome = document.getElementById("nome_editado").value;
var editora = document.getElementById("editora_editada").value;
var data = document.getElementById("data_editada").value;
var sinopse = document.getElementById("sinopse_editada").value;
var autor = document.getElementById("select_autor_editado");
var valor_autor = autor.options[autor.selectedIndex].value;
var categoria = document.getElementById("select_categoria_editada");
var valor_categoria = categoria.options[categoria.selectedIndex].value;

var periodo = document.getElementById("select_periodo_editado");
var valor_periodo = periodo.options[periodo.selectedIndex].value;

var sala = document.getElementById("select_sala_editada");
var valor_sala = sala.options[sala.selectedIndex].value;

var classificacao = document.getElementById(
"select_classificacao_editada"
);
var valor_classificacao =
classificacao.options[classificacao.selectedIndex].value;

formData.append("codigo", codigo);
formData.append("livro", nome);
formData.append("editora", editora);
formData.append("publicacao", data);
formData.append("sinopse", sinopse);
formData.append("autor", valor_autor);
formData.append("categoria", valor_categoria);
formData.append("periodo", valor_periodo);
formData.append("sala", valor_sala);
formData.append("classificacao", valor_classificacao);
var url = "";

if (nome != null || nome != "") {
url = `php/livros/livro_editar.php`;
} else {
alert("digita");
}
fetch(url, {
method: "POST",
body: formData,
})
.then((response) => response.json())
.then((data) => {
console.log(data);
alert(data.mensagem);
carregarLivros();
})
.catch((error) => {
console.error("Erro na requisição fetch:", error);
});
}
function cadCategoria() {
var categoria = document.querySelector("#nome_categoria").value;
var url = "";
if (categoria == null || categoria == "") {
alert("Digita tudo");
} else {
url = `php/categorias/categoria_cadastro.php?nome=${categoria}`;
alert(`Categoria: ${categoria}\n cadastrada com Sucesso!`);
categoria.value = null;
}
fetch(url)
.then((response) => response.json())

.then((data) => {
console.log(data);
alert(data.mensagem);
sacrificio();
});
}
function cadPeriodo() {
var periodo = document.querySelector("#periodo_nome").value;
var inicio = document.querySelector("#inicio_periodo").value;
var fim = document.querySelector("#fim_periodo").value;
var url = "";
if (periodo != null && periodo != "") {
url = `php/periodos/periodo_cadastro.php?nome=${periodo}&inicio=${inicio}&fim=${fim}`;
alert(`Categoria: ${periodo}\n cadastrada com Sucesso!`);
periodo.value = null;
} else {
alert("Digite todas as informações");
}
fetch(url)
.then((response) => response.json())
.then((data) => {
console.log(data);
alert(data.mensagem);
optionPeriodo();
});
}
function cadAutor() {
const formData = new FormData();
var autor = document.querySelector("#nome_autor").value;
var nacionalidade = document.querySelector("#nacionalidade").value;
var nascimento = document.querySelector("#data_nascimento").value;
var falecimento = document.querySelector("#data_falecimento").value;
var biografia = document.querySelector("#biografia").value;

var categoria = document.getElementById("selectoption_categoria");
var valor_categoria = categoria.options[categoria.selectedIndex].value;

var periodo = document.getElementById("option_periodo");
var valor_periodo = periodo.options[periodo.selectedIndex].value;

formData.append("nome", autor);
formData.append("nacionalidade", nacionalidade);
formData.append("nascimento", nascimento);
formData.append("falecimento", falecimento);
formData.append("biografia", biografia);
formData.append("categoria", valor_categoria);
formData.append("periodo", valor_periodo);

var url = "";

if (autor != null || autor != "") {
url = `php/autores/autor_cadastro.php`;
}

fetch(url, {
method: "POST",
body: formData,
})
.then((response) => response.json())
.then((data) => {
console.log(data);
alert(data.mensagem);
carregarAutores("");
})
.catch((error) => {
console.error("Erro na requisição fetch:", error);
});
}
function modalAutor() {
var myModal = new bootstrap.Modal(
document.getElementById("autor_modal")
);
myModal.show();
}
function apagarLivro(codigo, nome) {
var url = "php/livros/livro_excluir.php?codigo=" + codigo;
if (confirm("Deseja realmente excluir: " + nome + "?")) {
fetch(url)
.then((response) => response.json())
.then((data) => {
window.location.href = "livros.html";
});
}
}
function apareceCampos() {
var codigo = document.getElementById("codigo_livro");
var nome = document.getElementById("nome_editado");
var editora = document.getElementById("editora_editada");
var data = document.getElementById("data_editada");
var sinopse = document.getElementById("sinopse_editada");
var autor = document.getElementById("select_autor_editado");
var categoria = document.getElementById("select_categoria_editada");
var periodo = document.getElementById("select_periodo_editado");
var sala = document.getElementById("select_sala_editada");
var classificacao = document.getElementById(
"select_classificacao_editada"
);
var botao_editar = document.getElementById("botao_editar");
var botao_cancelar = document.getElementById("botao_cancelar");
var botao_categoria = document.querySelector(
"#botao_categoria_editada"
);
var botao_periodo = document.querySelector("#botao_periodo_editado");
var botao_autor = document.querySelector("#botao_autor_editado");
botao_categoria.style.display = "block";
botao_autor.style.display = "block";
botao_periodo.style.display = "block";
var pdf = document.querySelector("#icon-pdf");
codigo.style.display = "block";
nome.style.display = "block";
editora.style.display = "block";
data.style.display = "block";
sinopse.style.display = "block";
autor.style.display = "block";
categoria.style.display = "block";
periodo.style.display = "block";
sala.style.display = "block";
classificacao.style.display = "block";
botao_editar.style.display = "block";
botao_cancelar.style.display = "block";
}
function someCampos() {
var codigo = document.getElementById("codigo_livro");
var nome = document.getElementById("nome_editado");
var editora = document.getElementById("editora_editada");
var data = document.getElementById("data_editada");
var sinopse = document.getElementById("sinopse_editada");
var autor = document.getElementById("select_autor_editado");
var categoria = document.getElementById("select_categoria_editada");
var periodo = document.getElementById("select_periodo_editado");
var sala = document.getElementById("select_sala_editada");
var classificacao = document.getElementById(
"select_classificacao_editada"
);
var botao_categoria = document.querySelector(
"#botao_categoria_editada"
);
var botao_periodo = document.querySelector("#botao_periodo_editado");
var botao_autor = document.querySelector("#botao_autor_editado");
botao_categoria.style.display = "none";
botao_autor.style.display = "none";
botao_periodo.style.display = "none";
var botao_editar = document.getElementById("botao_editar");
var botao_cancelar = document.getElementById("botao_cancelar");
botao_editar.style.display = "none";
botao_cancelar.style.display = "none";
codigo.style.display = "none";
nome.style.display = "none";
editora.style.display = "none";
data.style.display = "none";
sinopse.style.display = "none";
autor.style.display = "none";
categoria.style.display = "none";
periodo.style.display = "none";
sala.style.display = "none";
classificacao.style.display = "none";
}
function mostraCampos(codigo, nome, editora, 
data, sinopse, 
categoriaSelecionada, periodoSelecionado, 
autorSelecionado, classificacaoSelecionada, salaSelecionada) {
var selectClassificacao = document.getElementById(
"select_classificacao_editada"
        );
        var valorCategoriaDesejado = classificacaoSelecionada;
for (var i = 0; i < selectClassificacao.options.length; i++) {
var option = selectClassificacao.options[i];
if (option.value === valorCategoriaDesejado) {
option.selected = true;
break;
}
}
  var selectSala = document.getElementById(
"select_sala_editada"
        );

        var valorSalaDesejada = salaSelecionada;

for (var i = 0; i < selectSala.options.length; i++) {
var option = selectSala.options[i];
if (option.value === valorSalaDesejada) {
option.selected = true;
break;
}
}
const readOnlyOptions = document.querySelectorAll(".read-only");

readOnlyOptions.forEach((option) => {
option.disabled = true;
});
apareceCampos();
carregarAutores(autorSelecionado);
carregarCategorias(categoriaSelecionada);
carregaPeriodos(periodoSelecionado);
document.getElementById("codigo_livro").value = codigo;
document.getElementById("nome_editado").value = nome;
document.getElementById("editora_editada").value = editora;

var dataFormatada = formatarData(data);

document.getElementById("data_editada").value = dataFormatada;
document.getElementById("sinopse_editada").value = sinopse;
}

function formatarData(data) {
const dataPartes = data.split("-");
if (dataPartes.length === 3) {
const ano = dataPartes[0];
const mes = dataPartes[1];
const dia = dataPartes[2];
return `${ano}-${mes}-${dia}`;
} else {
return data;
}
}

function carregarAutores(autor) {
var url = "php/autores/autor.php";

fetch(url)
.then((response) => response.json())
.then((data) => {
console.log(data);
var options = "";
for (let item in data) {
options += `<option value="${data[item].tb03_nome_autor}">${data[item].tb03_nome_autor}</option>`;
}

document.querySelector("#select_autor_editado").innerHTML = options;
var selectAutor = document.getElementById(
          "select_autor_editado"
        );
        var valorAutorDesejado = autor;

for (var i = 0; i < selectAutor.options.length; i++) {
var option = selectAutor.options[i];
if (option.value === valorAutorDesejado) {
option.selected = true;
break;
}
}
});

}
function carregaPeriodos(periodo) {
var url = "php/periodos/periodo.php";

fetch(url)
.then((response) => response.json())
.then((data) => {
console.log(data);

var options = "";
for (let item in data) {
options += `
<option value="${data[item].tb05_nome_periodo}" name="${data[item].tb05_nome_periodo}">${data[item].tb05_nome_periodo}</option>`;
}

document.querySelector("#select_periodo_editado").innerHTML =
options;
var selectPeriodo = document.getElementById(
          "select_periodo_editado"
        );
        var valorPeriodoDesejado = periodo;

for (var i = 0; i < selectPeriodo.options.length; i++) {
var option = selectPeriodo.options[i];
if (option.value === valorPeriodoDesejado) {
option.selected = true;
break;
}
}
});

}
function carregarCategorias(categoria) {
var url = "php/categorias/categoria.php";

fetch(url)
.then((response) => response.json())
.then((data) => {
console.log(data);

var options = "";
for (let item in data) {
options += `<option value="${data[item].tb04_nome_categoria}" name="${data[item].tb04_nome_categoria}">${data[item].tb04_nome_categoria}</option>`; 
}

document.querySelector("#select_categoria_editada").innerHTML =
options;
var selectCategoria = document.getElementById(
          "select_categoria_editada"
        );

        var valorCategoriaDesejado = categoria;

        for (var i = 0; i < selectCategoria.options.length; i++) {
          var option = selectCategoria.options[i];
          if (option.value === valorCategoriaDesejado) {
            option.selected = true;
            break;
          }
        }
    
});
}