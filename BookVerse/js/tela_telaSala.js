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
        formData.append("sala", id);

        var url = "";

        if (livro &&
        editora &&
        sinopse  &&
        publicacao) {
          url = `php/livros/livro_cadastro.php`;
           fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            alert(data.mensagem);
            carregarSalas();
          })
          .catch((error) => {
            console.error("Erro na requisição fetch:", error);
          });
      }
        else {
          alert("Digite todas as informações");
          modalLivro();
        }
        }

       
           function carregarCategorias() {
          var url = "php/categorias/categoria.php";

          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              var options = "";
              for (let item in data) {
                options += `<option value="${data[item].tb04_nome_categoria}" name="${data[item].tb04_nome_categoria}">${data[item].tb04_nome_categoria}</option>`; 
              }

              document.querySelector("#select_categoria").innerHTML = options;
            });
        }

        function carregarPeriodos() {
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

          var categoria = document.getElementById("select_categoria");
          var valor_categoria =
            categoria.options[categoria.selectedIndex].value;

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
          biografia) {
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
          }else{
            alert("Digite todas as informações");
            modalAutor();
          }
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
        function modalAutor() {
          var myModal = new bootstrap.Modal(
            document.getElementById("autor_modal")
          );
          myModal.show();
        }
        function cadCategoria() {
          var categoria = document.querySelector("#nome_categoria").value;
          var url = "";
          if (!categoria) {
            alert("Digite todas as informções");
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
              optionCategorias();
            });
        }
        function cadPeriodo() {
          var periodo = document.querySelector("#periodo_nome").value;
          var inicio = document.querySelector("#inicio_periodo").value;
          var fim = document.querySelector("#fim_periodo").value;
          var url = "";
          if (periodo) {
            url = `php/periodos/periodo_cadastro.php?nome=${periodo}&inicio=${inicio}&fim=${fim}`;
            alert(`Categoria: ${periodo}\n cadastrada com Sucesso!`);
            periodo.value = null;
          } else {
            alert("Digite todas as informações");
            modalPeriodo();
          }
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              alert(data.mensagem);
              optionPeriodo();
            });
        }var nomezinho = "";
        var id = "";

        function passaTela(){
              var pesquisa = document.getElementById('pesquisa').value;
window.location.href="livros.html?pesquisa="+pesquisa;            
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
          carregarSalas();
          optionCategorias();
          carregarCategorias();
          carregarPeriodos();
          optionPeriodo();
          carregarAutores();
      });
      
      function limitarCaracteres(elemento, maxCaracteres, elementoMensagem) {
  var texto = 'Limite de caracteres excedido.';
  if (elemento.value.length > maxCaracteres) {
    elemento.value = elemento.value.substring(0, maxCaracteres);
    document.getElementById(elementoMensagem).textContent = 'Limite de caracteres excedido.';
  } else {
    document.getElementById(elementoMensagem).textContent = '';
  }
}
function carregarSalas() {
  var queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  var codigo = urlParams.get("codigo");
  var url = `php/salas/sala_selecionada.php?codigo=${codigo}`;
var url2 = `php/salas/sala2.php?codigo=${codigo}`;

fetch(url2)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        nomezinho = ` ${item.tb06_ano}- ${item.tb06_nome}`;
        id = `${item.tb06_id}`;
          })
            }
    )
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        document.querySelector("#sem_livro").style.display = "block";
      } else {
        document.querySelector("#sem_livro").style.display = "none";
      }
      var informacoes = "";
      logado = sessionStorage.getItem("logado");

      if (logado == "sim") {
        informacoes += `
        <center>
<h1> ${nomezinho}</h1>
          </center>
          <div class="col-3 "style=" width:200px">
            <a href="#" id="Livross" onclick="modalLivro()">
              <div class="caixa-livro text-center" style="min-height:200px">
                <i class="fas fa-plus icone"></i>
              </div>
              <h7 class="card-subtitle gcm"style="margin-left:-4%">Adicionar</h7>
            </a>
          </div>`;
      } else {
        informacoes += `
        <center>
<h1> ${nomezinho}</h1>
          </center>
          <div class="col-3 escondido"style=" width:200px>
            <a href="#" id="Livross" onclick="modalLivro()">
              <div class="caixa-livro text-center" style="min-height:200px">
                <i class="fas fa-plus icone"></i>
              </div>
              <h7 class="card-subtitle gcm"style="margin-left:-4%">Adicionar</h7>
            </a>
          </div>`;
      }

      var contador = 1;

      data.forEach((item) => {
        nomezinho = ` ${item.tb06_ano} - ${item.tb06_nome}`;
        id = `${item.tb06_id}`;
                        if (contador++ % 4 == 4)
                          informacoes += "</div> <div class='row'>";


        informacoes += `
          <div class="col-3" style="width:200px"><br>
            <a href="telalivro.html?codigo=${item.tb01_id_livro}">
              <img src="img/livros/${item.tb01_ftcapa}" style="width:150px;  height:200px"
                class="Livros"
                alt="${item.tb01_nome_livro}"
              />
            </a>
            <p>${item.tb01_nome_livro}</p>
            <h7 class="card-subtitle">Por 
              <a href="telaAutores.html?codigo=${item.tb01_id_autor}">
                ${item.tb03_nome_autor}
              </a> (autor)
            </h7>
          </div>
        `;
      });

      document.querySelector("#sala").innerHTML = informacoes;
    })
    .catch((error) => {
      console.error("Erro na requisição fetch:", error);
    });
}

carregarSalas();
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
        var url = "php/usuarios/usuario_excluir.php?codigo=" + rm;
        if (confirm("Deseja apagar essa conta?" + rm)) {
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              sessionStorage.clear();
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
      const navbarLinks = document.querySelectorAll(".nav-link");

      navbarLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
          navbarLinks.forEach((link) => {
            link.classList.remove("active");
          });

          event.target.classList.add("active");
        });
      });
      function modalLivro(){
        var sala = document.getElementById("nome_sala");
        sala.disabled = true;
        sala.style.color = "gray";
        sala.innerText = nomezinho;
        var myModal = new bootstrap.Modal(
             document.getElementById("livro_modal")
           );
           myModal.show();
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
<option value="${data[item].tb05_nome_periodo}" name="${data[item].tb05_nome_periodo}">${data[item].tb05_nome_periodo}</option>`;
      }

      var selectElement = (document.querySelector(
        "#option_periodo"
      ).innerHTML = options);
    });
}

function checkInput(element) {
  if (element.value.trim() !== "") {
    element.classList.add("has-text");
  } else {
    element.classList.remove("has-text");
  }
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