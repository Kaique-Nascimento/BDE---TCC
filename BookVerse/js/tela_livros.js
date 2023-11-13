var cod_alt;
  var codd;
  var cod;
  var cod_alt1;
  var codd1;
  var cod1;
  //Categorias
  function carregarCategorias() {
    var url = "php/categorias/categoria.php";
    var informacoes = "";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        informacoes = "";

        for (let item in data) {
          codd = data[item].tb04_id_categoria
          informacoes += `
                        <div class="row">
<div class="col-sm">
<input type="checkbox" class="checkCategoria" id="${data[item].tb04_nome_categoria}" name="${data[item].tb04_nome_categoria}" 
onclick="atualizarLivros()" value=${data[item].tb04_id_categoria}>
<label for="${data[item].tb04_nome_categoria}">${data[item].tb04_nome_categoria}</label>
</div>`;
if(logado == "sim"){
informacoes += `<div class="col-sm">
<a href="#" onclick="editarCategoria('${data[item].tb04_nome_categoria}', ${data[item].tb04_id_categoria})" class="icone">
  <i class="fas fa-edit"></i>
</a>
<a href="#" onclick="apagaCategoria(${data[item].tb04_id_categoria},'${data[item].tb04_nome_categoria}')"class="icone">
          <i class="fas fa-trash"></i>
</a>
</div>
</div>`;
}
else{
  informacoes += `<div class="col-sm">
<a href="#" onclick="editarCategoria('${data[item].tb04_nome_categoria}', ${data[item].tb04_id_categoria})" class="icone escondido">
  <i class="fas fa-edit"></i>
</a>
<a href="#" onclick="apagaCategoria(${data[item].tb04_id_categoria},'${data[item].tb04_nome_categoria}')"class="icone escondido">
          <i class="fas fa-trash"></i>
</a>
</div>
</div>`;
}

        }

        document.querySelector("#lista_categoria").innerHTML = informacoes;
      });
  }

  function cadCategoria() {
    var categoria = document.querySelector("#nome_categoria").value;
    var url = "";
    if(categoria){
      if (cod_alt != "" && cod_alt == codd) {
        url = `php/categorias/categoria_editar.php?nome=${categoria}&codigo=${cod_alt}`;
      
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert(data.mensagem);
          carregarCategorias();
          optionCategorias();
          sacrificio();
      });  
      }
      
      
      else {
        url = `php/categorias/categoria_cadastro.php?nome=${categoria}`;
        categoria.value = null;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          carregarCategorias();
          optionCategorias();
          sacrificio();
          var coisa = data.coisa;
          if(coisa == 1){
            alert(data.mensagem);
          } 
        else{
alert(data.mensagem);
        }   
      });  
      }
    }  
    else{
      alert("Digite todas as informações");
      modalCategoria();
    }
  }
  function editarCategoria(nomeCategoria, codigoCategoria){
    cod_alt = codigoCategoria;
      codd = codigoCategoria;
        document.querySelector("#nome_categoria").value = nomeCategoria;
console.log(nomeCategoria);
modalCategoria();

            }
            function apagaCategoria(codigoCategoria, nomeCategoria){
              var url = 'php/categorias/categoria_excluir.php?codigo=' + codigoCategoria
if (confirm("Deseja excluir a categoria " + nomeCategoria + "?")) {
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    var coisa = data.coisa;
    if(coisa ==1){
      alert(data.mensagem);
    }
    else{
      alert("Categoria "+nomeCategoria+" excluída com sucesso!");
      carregarCategorias();
    }
  })
}
}
  //Períodos
  function carregarPeriodos() {
    var url = "php/periodos/periodo.php";
    var informacoes = "";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        informacoes = "";
        for (let item in data) {
          informacoes += `
          <div class="row">
          <div class="col-md-6">
            <input
            type="checkbox"
            class="checkPeriodo"
            onclick="atualizarLivros()"
            id="${data[item].tb05_nome_periodo}"
            name="${data[item].tb05_nome_periodo}"
            value="${data[item].tb05_id_periodo}"/>
          <label for="${data[item].tb05_nome_periodo}">${data[item].tb05_nome_periodo}</label>
          </div>
          <div class="col-md-4 ano" >
          (${data[item].tb05_inicio} - ${data[item].tb05_fim})
        </div>`;
        if(logado == "sim"){
          informacoes+=
          `<div class="col-md-1">
          <a href="#" onclick="editarPeriodo('${data[item].tb05_nome_periodo}', ${data[item].tb05_id_periodo}, ${data[item].tb05_inicio}, ${data[item].tb05_fim})" class="icone">
            <i class="fas fa-edit" ></i>
          </a>
          <a href="#" onclick="apagaPeriodo(${data[item].tb05_id_periodo}, '${data[item].tb05_nome_periodo}')" class="icone">
                    <i class="fas fa-trash"></i>
          </a>
        </div>
        </div>`;
        }
else{
  informacoes+=
  `<div class="col-md-1">
  <a href="#" onclick="editarPeriodo('${data[item].tb05_nome_periodo}', ${data[item].tb05_id_periodo}, ${data[item].tb05_inicio}, ${data[item].tb05_fim})" class="icone escondido">
    <i class="fas fa-edit" ></i>
  </a>
  <a href="#" onclick="apagaPeriodo(${data[item].tb05_id_periodo}, '${data[item].tb05_nome_periodo}')" class="icone escondido">
            <i class="fas fa-trash"></i>
  </a>
</div>
</div>`;
}
        }

        document.querySelector("#lista_periodo").innerHTML = informacoes;
      });
  }
       function cadPeriodo() {
    var periodo = document.querySelector("#periodo_nome").value;
    var inicio = document.querySelector("#inicio_periodo").value;
    var fim = document.querySelector("#fim_periodo").value;
    var url = "";

    if (periodo != null && periodo != "" && inicio != null && inicio != "" && fim != null && fim != "") {
      if (cod_alt != "" && cod_alt == codd) {
        url = `php/periodos/periodo_editar.php?nome=${periodo}&inicio=${inicio}&fim=${fim}&codigo=${cod_alt}`;
            alert(`Período: ${periodo}\n atualizado com Sucesso!`);
        } else {
            url = `php/periodos/periodo_cadastro.php?nome=${periodo}&inicio=${inicio}&fim=${fim}`;
            alert(`Período: ${periodo}\n cadastrado com Sucesso!`);
        }

        // Limpar os campos após o cadastro ou atualização
        document.querySelector("#periodo_nome").value = "";
        document.querySelector("#inicio_periodo").value = "";
        document.querySelector("#fim_periodo").value = "";

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                alert(data.mensagem);
                carregarPeriodos();
                optionPeriodo();
            });
    } else {
        alert("Digite todas as informações");
        modalPeriodo();
    }
}
function editarPeriodo(nomePeriodo, codigoPeriodo, inicioPeriodo, fimPeriodo){
  cod_alt = codigoPeriodo;
    codd = codigoPeriodo;
      document.querySelector("#periodo_nome").value = nomePeriodo;
      document.querySelector("#inicio_periodo").value = inicioPeriodo;
      document.querySelector("#fim_periodo").value = fimPeriodo;
console.log(nomePeriodo);
modalPeriodo();

          }
          function apagaPeriodo(codigoPeriodo, nomePeriodo){
            var url = 'php/periodos/periodo_excluir.php?codigo=' + codigoPeriodo
if (confirm("Deseja excluir o período " + nomePeriodo + "?")) {
fetch(url)
.then((response) => response.json())
.then((data) => {
  var coisa = data.coisa;
  if(coisa ==1){
    alert(data.mensagem);
  }
  else{
    alert("Período "+nomePeriodo+" excluído com sucesso!");
    carregarPeriodos();
  }})
}
}

function carregarAutores(){
  var url = "php/autores/autor.php";

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        var options = "";
for(let item in data){
  options += `<option value="${data[item].tb03_nome_autor}">${data[item].tb03_nome_autor}</option>`; 

}
        

document.querySelector("#select_autor").innerHTML = options;
    });
}
function optionCategorias() {
  var url = "php/categorias/categoria.php";

  fetch(url)
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
          var options = "";
for(let item in data){
options += `<option value="${data[item].tb04_nome_categoria}">${data[item].tb04_nome_categoria}</option>`;

}
          

document.querySelector("#option_categoria").innerHTML = options;
      });
}
function optionPeriodo() {
  var url = "php/periodos/periodo.php";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var options = "";
      for (let item in data) {
        options += `
<option value="${data[item].tb05_nome_periodo}" name="${data[item].tb05_nome_periodo}">${data[item].tb05_nome_periodo}</option>`; // Ajuste dos campos
      }

      var selectElement = (document.querySelector(
        "#option_periodo"
      ).innerHTML = options);
    });
}

                const fileInputs = document.querySelectorAll(
                  '.custom-file-upload input[type="file"]'
                );
                const fileMessages = document.querySelectorAll(".file-message");
        
                function showFileMessage(index) {
                  const fileInput = fileInputs[index];
                  const fileMessage = fileMessages[index];
        
                  if (fileInput.files.length > 0) {
                    const fileName = fileInput.files[0].name;
                    fileMessage.innerHTML = `Arquivo "${fileName}" enviado com sucesso!`;
                    fileMessage.style.display = "block";
                  } else {
                    fileMessage.style.display = "none";
                  }
                }
        
                fileInputs.forEach((input, index) => {
                  input.addEventListener("change", () => {
                    showFileMessage(index);
                  });
                });
                function checkInput(element) {
                  if (element.value.trim() !== "") {
                    element.classList.add("has-text");
                  } else {
                    element.classList.remove("has-text");
                  }
                }
        
function modalLivro(){
        
               var myModal = new bootstrap.Modal(
                    document.getElementById("livro_modal")
                  );
                  myModal.show();
                }
        
                function modalCategoria(){
                  document.getElementById("categoria")
                    var myModal = new bootstrap.Modal(
                      document.getElementById("categoria_modal")
                    );
                    myModal.show();
                }
        
        function modalPeriodo(){
        
                          var myModal = new bootstrap.Modal(
                      document.getElementById("periodo_modal")
                    );
                    myModal.show();
                  };
                window.addEventListener("load", (event) => {
                  carregarCategorias();
        carregarPeriodos();
        carregarAutores();
        optionCategorias();
      });
      function sacrificio() {
        var url = "php/categorias/categoria.php";

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            var options = "";
            for (let item in data) {
              options += `<option value="${data[item].tb04_nome_categoria}" name="${data[item].tb04_nome_categoria}">${data[item].tb04_nome_categoria}</option>`; // Ajuste dos campos
            }

            document.querySelector("#selectoption_categoria").innerHTML = options;
          });
      }

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
       function limitarCaracteres(elemento, maxCaracteres, elementoMensagem) {
  var texto = 'Limite de caracteres excedido.';
  if (elemento.value.length > maxCaracteres) {
    elemento.value = elemento.value.substring(0, maxCaracteres);
    document.getElementById(elementoMensagem).textContent = 'Limite de caracteres excedido.';
  } else {
    document.getElementById(elementoMensagem).textContent = '';
  }
}
window.addEventListener("load", (event) => {
        logado = sessionStorage.getItem("logado");
        var login = document.querySelector('#logadinho');
        var queryString = window.location.search;
                  const urlParams = new URLSearchParams(queryString);
                  var pesquisa = urlParams.get("pesquisa");
          if(logado == "sim"){
            mostraLogin();
            login.style.display = 'none';
          }
          else{
            escondeLogin();
            login.style.display = 'block';
          }
          carregarCategorias();
        carregaPeriodos();
        optionCategorias();
        optionPeriodo();
        sacrificio();
        if(pesquisa){
          carregarLivros('pesquisa='+pesquisa);
          document.getElementById('pesquisa').value = pesquisa;
        }
        else{
          carregarLivros();
        }
        nome = sessionStorage.getItem("nome");
        email = sessionStorage.getItem("email");
        rm = sessionStorage.getItem("rm");
      }); 
      const readOnlyOptions = document.querySelectorAll(".read-only");

readOnlyOptions.forEach((option) => {
  option.disabled = true;
});
      function escondeLogin(){
        var escondidos = document.getElementsByClassName("escondido");
for (var i = 0; i < escondidos.length; ++i) 
{
  escondidos[i].style.display = 'none';
 }
}
function mostraLogin(){
  var escondidos = document.getElementsByClassName("escondido");
for (var i = 0; i < escondidos.length; ++i) 
{
  escondidos[i].style.display = 'block';
 }
}

    
      function sair() {
        if (confirm("Tem certeza que deseja sair da conta?")) {
          sessionStorage.clear();
          location.reload();
          sessionStorage.setItem("logado", "nao");
        }
      }
      function apagarConta() {
        var rm = sessionStorage.getItem("rm");
        var nome = sessionStorage.getItem("nome");
        var url = "php/categorias/categoria_excluir.php?codigo=" + rm;
        if (confirm("Deseja apagar essa conta?" + nome)) {
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              sessionStorage.clear();
              location.reload();
              sessionStorage.setItem("logado", "nao");
            });
        }
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
          modalEmail();
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

      if (sessionStorage.getItem("tema") === "escuro") {
        mudarParaEscuro();
      } else {
        mudarParaClaro();
      }
      var cod_alt = 0;
      var codd = 0;

      function cadastroLivro() {
        const formData = new FormData();
        var livro = document.querySelector("#nome_livro").value;
        var editora = document.querySelector("#nome_editora").value;
        var publicacao = document.querySelector("#data_publicacao").value;
        var sinopse = document.querySelector("#sinopse").value;

        var categoria = document.getElementById("option_categoria");
        var valor_categoria = categoria.options[categoria.selectedIndex].value;

        var periodo = document.getElementById("select_periodo");
        var valor_periodo = periodo.options[periodo.selectedIndex].value;

        var autor = document.getElementById("select_autor");
        var valor_autor = autor.options[autor.selectedIndex].value;
        var sala = document.getElementById("select_sala");
        var valor_sala = sala.options[sala.selectedIndex].value;

        var classificacao = document.getElementById("select_classificacao");
        var valor_classificacao =
          classificacao.options[classificacao.selectedIndex].value;

        formData.append("livro", livro);
        formData.append("editora", editora);
        formData.append("publicacao", publicacao);
        formData.append("sinopse", sinopse);
        formData.append("autor", valor_autor);
        formData.append("categoria", valor_categoria);
        formData.append("periodo", valor_periodo);
        formData.append("classificacao", valor_classificacao);
        formData.append("sala", valor_sala);

        var url = "";

        if (livro &&
        editora &&
        sinopse  &&
        publicacao) {
          url = `php/livros/livro_cadastro.php`;
        } else {
          alert("Digite todas as informações");
          modalLivro();
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

      function carregaPeriodos() {
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
              "#select_periodo"
            ).innerHTML = options);
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

        var periodo = document.getElementById("select_periodo");
        var valor_periodo = periodo.options[periodo.selectedIndex].value;

        formData.append("nome", autor);
        formData.append("nacionalidade", nacionalidade);
        formData.append("nascimento", nascimento);
        formData.append("falecimento", falecimento);
        formData.append("biografia", biografia);
        formData.append("categoria", valor_categoria);
        formData.append("periodo", valor_periodo);

        var url = "";

        if (autor &&
          nacionalidade &&
          nascimento &&
          falecimento &&
          biografia
          ) {
          url = `php/autores/autor_cadastro.php`;
          fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            alert(data.mensagem);
            carregarAutores();
          })
          .catch((error) => {
            console.error("Erro na requisição fetch:", error);
          });        
        }
        else{
          alert("Digite todas as informações");
          modalAutor();
        }

       
      }
      function atualizarLivros(codigo){
        var listaCategorias = "";
        var listaPeriodos = "";
        var listaPesquisa = "";
        var categoriaLista = document.getElementsByClassName("checkCategoria");
        var listaPesquisa = document.getElementById('pesquisa').value;
for (var i = 0; i < categoriaLista.length; ++i) 
{ 
  if(categoriaLista[i].checked){
    listaCategorias+=categoriaLista[i].value+",";
  }
}
        var periodoLista = document.getElementsByClassName("checkPeriodo");
for (var i = 0; i < periodoLista.length; ++i) 
{ 
  if(periodoLista[i].checked){
    listaPeriodos+=periodoLista[i].value+",";
  }
}
if(listaCategorias == "" && listaPeriodos == "" && listaPesquisa == ""){
  carregarLivros();
}
else{
  if(listaPesquisa == ""){

  carregarLivros("categoria="+listaCategorias+"&periodo="+listaPeriodos);
  }
  else{

    carregarLivros("pesquisa="+listaPesquisa);
    for (var i = 0; i < periodoLista.length; ++i) {
      periodoLista[i].checked = false;
    }
   for (var i = 0; i < categoriaLista.length; ++i) {
      categoriaLista[i].checked = false;
      }
    

    }
  }


}
      function carregarLivros(filtro = "") {
        var url = "php/livros/livro.php?"+filtro;

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            var contador = 1;
            var informacoes = "";
            logado = sessionStorage.getItem("logado");
            if(logado == "sim"){
              informacoes = `
            <div class="col-3" style="margin-left:-1%">
              <a href="#" id="Livross" onclick="modalLivro()">
                <div class="caixa-livro text-center">
                  <i class="fas fa-plus icone"></i>
                </div>
                <h7 class="card-subtittle gcm">Adicionar</h7>
              </a>
            </div>   `;
            if (contador < 4) {
                contador++;
              } else {
                informacoes +=
                  '</div> <div class="row id="livross" style="margin-left:1%; margin-top: 3%">';
                contador = 1;
              }
            }
            else{
              informacoes = `
            <div class="col-3 escondido">
              <a href="#" id="Livross" onclick="modalLivro()">
                <div class="caixa-livro text-center">
                  <i class="fas fa-plus icone"></i>
                </div>
                <h7 class="card-subtittle gcm">Adicionar</h7>
              </a>
            </div>   `;
            }
for (let item in data) {
              
              if(logado == "nao"){
                if (contador = 4) {
                contador++;
              } else {
                informacoes +=
                  '</div> <div class="row id="livross" style=" margin-top: 3%">';
                contador = 1;
              }
                informacoes += `
                <div class="col-3"style="width:210px; margin-left: 1%"><br>
            <a href="telalivro.html?codigo=${data[item].tb01_id_livro}">
              <img src="img/livros/${data[item].tb01_ftcapa}"style="width:150px;  height:200px"
                class="Livros"
                alt="${data[item].tb01_nome_livro}"
              />
            </a>
            <p>${data[item].tb01_nome_livro}</p>
            <h7 class="card-subtittle">Por 
              <a href="telaAutores.html?codigo=${data[item].tb01_id_autor}&categoria=${data[item].tb01_id_categoria}&periodo=${data[item].tb01_id_periodo}">
              ${data[item].nome_autor}
              </a> (autor)</h7>
          </div>
          `;
              }
              else{
                informacoes += `
                <div class="col-3"style="width:210px; margin-left: 1%"><br>
            <a href="telalivro.html?codigo=${data[item].tb01_id_livro}">
              <img src="img/livros/${data[item].tb01_ftcapa}"style="width:150px;  height:200px"
                class="Livros"
                alt="${data[item].tb01_nome_livro}"
              />
            </a>

            <p>${data[item].tb01_nome_livro}</p>

            <h7 class="card-subtittle">Por 
              <a href="telaAutores.html?codigo=${data[item].tb01_id_autor}&categoria=${data[item].tb01_id_categoria}&periodo=${data[item].tb01_id_periodo}">
              ${data[item].nome_autor}
              </a> (autor)</h7>
          </div>
          `;
              }
              
            }
            document.querySelector("#livross").innerHTML = informacoes;
          });
      }
      function modalAutor() {
        var myModal = new bootstrap.Modal(
          document.getElementById("autor_modal")
        );
        myModal.show();
      }