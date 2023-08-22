var cod_alt;
  var codd;
  var cod;
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
<input type="checkbox" id="${data[item].tb04_nome_categoria}" name="${data[item].tb04_nome_categoria}" />
<label for="${data[item].tb04_nome_categoria}">${data[item].tb04_nome_categoria}</label>
</div>
<div class="col-sm">
<a href="#" onclick="editarCategoria('${data[item].tb04_nome_categoria}', ${data[item].tb04_id_categoria})" class="icone">
  <i class="fas fa-edit" ></i>
</a>
<a href="#" onclick="apagaCategoria(${data[item].tb04_id_categoria})"class="icone">
          <i class="fas fa-trash"></i>
</a>
</div>
</div>`;
        }

        document.querySelector("#lista_categoria").innerHTML = informacoes;
      });
  }
  function cadCategoria() {
    var categoria = document.querySelector("#nome_categoria").value;
    var url = "";
    if (cod_alt != "" && cod_alt == codd) {
      url = `php/categorias/categoria_editar.php?nome=${categoria}&codigo=${cod_alt}`;
    } 
    else if (categoria == null || categoria == "") {
      alert("Digita tudo");
    }
    else {
      url = `php/categorias/categoria_cadastro.php?nome=${categoria}`;
      alert(`Categoria: ${categoria}\n cadastrada com Sucesso!`);
      categoria.value = null;
    }
    fetch(url)
      .then((response) => response.json())

      .then((data) => {
        console.log(data);
        alert(data.mensagem);
        carregarCategorias();
      });
  }

  function editarCategoria(nomeCategoria, codigoCategoria){
    cod_alt = codigoCategoria;
      codd = codigoCategoria;
        document.querySelector("#nome_categoria").value = nomeCategoria;
console.log(nomeCategoria);
modalCategoria();

            }
            function apagaCategoria(codigoCategoria){
              var url = 'php/categorias/categoria_excluir.php?codigo=' + codigoCategoria
if (confirm("Deseja excluir o usuário com o Codigo " + codigoCategoria + "?")) {
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    carregarCategorias();
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
          <div class="col-md-4">
            <input
            type="checkbox"
            id="${data[item].tb05_nome_periodo}"
            name="${data[item].tb05_nome_periodo}"/>
          <label for="${data[item].tb05_nome_periodo}">${data[item].tb05_nome_periodo}</label>
          </div>
          <div class="col-md-4 ano">
            (${data[item].tb05_inicio} - ${data[item].tb05_fim})
          </div>
          <div class="col-md-4">
            <a href=""class="icone">
              <i class="fas fa-edit" ></i>
            </a>
            <a href="" class="icone">
                      <i class="fas fa-trash"></i>
            </a>
          </div>
        </div>`;
        }

        document.querySelector("#lista_periodo").innerHTML = informacoes;
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
                      carregarPeriodos();
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
      });