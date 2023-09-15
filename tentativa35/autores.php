<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bem-Vindo</title>
    <link rel="stylesheet" href="css/css.css"/>
    <link href="bootstrap/bootstrap.css" rel="stylesheet"/>
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
  </head>
  <body>
    <header>
      <div id="top">&nbsp</div>
      <nav class="navbar navbar-expand-lg azul">
        <div class="container-fluid">
          <a href="index.html" class="nav-link active">
            <img src="img/logo3.png" width="80em"></a>
          <button
            class="navbar-toggler"\
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul
              class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style="--bs-scroll-height: 100px"
            >
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="livros.html">Livros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="autores.html">Autores</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Link
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Procurar"
                aria-label="Search"
              />
              <button class="editado" type="submit">
                Procurar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
    <div class="banner esquerda"></div>
    <div class="banner direita"></div>
    <main>
      <center>
        <main>
         
          <div class="container">
            <h1 class="text-center">Autores em Destaque</h1>
           
            <div class="row" id="autores">

          </div>
            
           </div>
    
           
              <div class="container">
              <div class="row" id="autores">
                <div class="row" style="padding-top: 30px;">
                  <div class="col-md-2">
                    <a href="livros.html">
                    <div class="card-fotos card-equal-height" style="height: 300px d-flex align-items-center justify-content-center;">
                      <img src="img/autores/oda.png" style="margin-top: 50px;"class="autores" alt="Livro1" />
                      <div class="card-body2">
                      </a>
                        <h5 class="card-tittle tt">Eichiro Oda</h5>
                      </div>
                      <h7 class="card-subtittle">10 publicações</h7>
                    </div>
                    
          </div>
          
                  <div class="col-md-2">
                    <a href="livros.html">
                    <div class="card-fotos card-equal-height" style="height: 300px d-flex align-items-center justify-content-center; margin-left: 40px;;">
                      <img src="img/autores/one.jpg" style="margin-top: 50px;"class="autores" alt="Livro1" />
                      <div class="card-body2">
                      </a>
                        <h5 class="card-tittle tt">One</h5>
                      </div>
                      <h7 class="card-subtittle">10 publicações</h7>
                    </div>
                    
                  </div>
                  <div class="col-md-2">
                    <a href="livros.html">
                    <div class="card-fotos card-equal-height" style="height: 300px; margin-left: 80px">
                      <img src="img/autores/moyo.jpg" class="autores"  style="margin-top: 50px;" alt="Livro1" />
                      <div class="card-body2">
                      </a>
                        <h5 class="card-tittle tt">Masashi Kishimoto</h5>
                      </div>
                      <h7 class="card-subtittle">10 publicações</h7>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <a href="livros.html">
                    <div class="card-fotos card-equal-height" style=" height: 300px; margin-left: 120px">
                      <img src="img/autores/ara.jpg"style="margin-top: 50px;"class="autores" alt="Livro1" />
                      <div class="card-body2">
                      </a>
                        <h5 class="card-tittle tt">Hirohiko Akari</h5>
                      </div>
                      <h7 class="card-subtittle">10 publicações</h7>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <a href="livros.html">
                    <div class="card-fotos card-equal-height" style=" height: 300px; align-items:center justify-content-center; margin-left: 160px">
                      <img src="img/autores/hanzo.jpg" style="margin-top: 50px;" class="autores" alt="Livro1" />
                      <div class="card-body2">
                      </a>
                        <h5 class="card-tittle tt">atpri hanzo</h5>
                      </div>
                      <h7 class="card-subtittle">10 publicações</h7>
                    </div>
                  </div>
                 
                </div> 

              </div>
              
            </div>
          </div>
         
</div>  

              
          <!-- Modal Cadastro Autor -->
          <div
          class="modal fade"
          id="autor_modal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Cadastro de Autor
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <center>
                  <div class="card-modal">
                    <div class="row">
                     
                      <div class="mx-auto" style="width: 50%">
                      <form enctype="multipart/form-data" method="post" name="acao">

                        <div class="inputBox">
                          <span class="user">Nome do Autor</span>
                          <input type="text" id="nome_autor" name="nome_autor" required/>
                        </div>
                        <div class="inputBox">
                          <span class="user">Nascimento</span>
                          <input type="date" id="data_nascimento" name="data_nascimento" required/>
                        </div>
                        <div class="inputBox">
                          <span class="user">Selecione a principal categoria:</span>
                          <br>
                          <select name="select_categoria" id="select_categoria">
                          
                          </select>
                          <a href="#" onclick="modalCategoria()">
                            <button class="btn btn-primary cadastro">Cadastrar nova categoria</button>
                          </a>

                 
                     

                        </div>
                      </div>
                      <div class="mx-auto" style="width: 50%">
                        <div class="inputBox">
                          <span class="user">Nacionalidade</span>
                          <input type="text" id="nacionalidade" name="nacionalidade" required />
                        </div>
                        <div class="inputBox">
                          <span class="user">Falecimento</span>
                          <input type="date" id="data_falecimento" name="data_falecimento"required />
                        </div>
                        <div class="inputBox">
                          <span class="user">Selecione o Período <br> que viveu:</span>
                          <br>
                          <select name="select_periodo" id="select_periodo">
                          </select>
                          <button class="btn btn-primary cadastro" onclick="modalPeriodo()">Cadastrar novo período</button>
                        </div>

                      </div>
                      <div class="mx-auto" style="width: 50%">
                        <div class="inputBox">
                          <div class="form-group">
                            <span class="user">Imagem do Autor</span>
                          <label class="custom-file-upload">
                            <i class="fas fa-cloud-upload"></i> Escolha um arquivo
                            <input
                              type="file"
                              id="arquivo"
                              name="arquivo"
                              accept="image/jpeg, image/png"
                            />
                          </label>



                            <br>
                          </div> 
                          <!--<label style="margin-left:18%; margin-top: 7%" class="foto" id="fotos" for="arquivo"> FOTO </label>	-->	
                          	<br>
                          <div id="fileMessage2" class="file-message"></div>
                        </div>
                      </div>
                    </div>
                    <div class="inputBox text-center">
                      <span class="user">Biografia do Autor</span>
                      <textarea
                        rows="5"
                        cols="200"
                        placeholder="Escreva a biografia do autor..."
                        oninput="checkInput(this)"
                        id="biografia"
                        name="biografia"
                      ></textarea>
                    </div>
                  </div>
                </center>
              </div>
              <div class="modal-footer">
                <button type="button" class="exit" data-bs-dismiss="modal">
                  Cancelar
                </button>
                <button type="submit" class="enter" onclick="cadAutor()">Cadastrar</button>
                </form> 
                <?php
                include_once "php/conexao.php";
               
                if(isset($_POST["nome_autor"]) && isset($_POST["nacionalidade"]) &&
                   isset($_POST["data_nascimento"]) && isset($_POST["data_falecimento"]) &&
                   isset($_POST["biografia"]) && (isset($_FILES["arquivo"]))){
                        $dir = "img/autores"; 
                        $arquivo = $_FILES["arquivo"];
                        if ($arquivo["error"] == 0) {
                            $nomeimagem = pathinfo($arquivo["name"], PATHINFO_FILENAME);
                            $nomeimagem = $nomeimagem .'.png';
                      
                            // Move o arquivo da pasta temporária de upload para a pasta de destino 
                            if (move_uploaded_file($arquivo["tmp_name"], "$dir/" . $nomeimagem)) {
                                echo "<script>alert('Arquivo $nomeimagem enviado com sucesso!');</script>";
                                
                            } else {
                                echo "Erro, o arquivo não pode ser enviado.";
                            }    
                        } else {
                            echo "Erro no envio do arquivo. Código de erro: " . $arquivo["error"];
                        }
                    $autor = $_POST["nome_autor"];
                    $nacionalidade = $_POST["nacionalidade"];
                    $nascimento = $_POST["data_nascimento"];
                    $falecimento = $_POST["data_falecimento"];
                    $biografia = $_POST["biografia"];
                     /*AJEITAR*/ 
                     $categoria = $_POST['select_categoria'];

                   $periodo = $_POST['select_periodo'];
                    $valor_categoria = $categoria;
                    $valor_periodo = $periodo;
                
                    $sql = "SELECT tb03_nome_autor FROM tb03_autor WHERE tb03_nome_autor = ?";
                    $comando = $banco->prepare($sql);
                    $comando->execute(array($autor));
                    
                    if($comando->fetch()) {
                        $mensagem = "Autor existente!";
                        echo json_encode(array("mensagem" => $mensagem));
                        exit();
                    }
                
                    // Inserir os dados na tabela tb03_autor
                    $sql = "INSERT INTO tb03_autor
                            (tb03_id_autor, tb03_nome_autor, tb03_biografia,
                             tb03_nascimento, tb03_obito, tb03_nacionalidade, 
                             tb03_foto_autor, tb03_id_categoria, tb03_id_periodo)
                            VALUES (NULL, ?, ?, 
                            ?, ?, ?, 
                            ?,(SELECT tb04_id_categoria from tb04_categoria where tb04_nome_categoria = ?), 
                            (SELECT tb05_id_periodo from tb05_periodo where tb05_nome_periodo = ?))";
                    
                    try {
                        $comando = $banco->prepare($sql);
                        $comando->execute(array($autor, $biografia, $nascimento, $falecimento,
                                                $nacionalidade, $nomeimagem, $valor_categoria, 
                    $valor_periodo));
                
                        $mensagem = "Registro inserido com sucesso!";
                    } catch (PDOException $e) {
                        $mensagem = "Erro ao inserir o registro.";
                    }
                } else {
                    $mensagem = "Dados incompletos.";
                }
                
                echo json_encode(array("mensagem" => $mensagem));

?>
              </div>
            </div>
          </div>
        </div>
          <!--  -->
 <!-- Modal Cadastro Categoria -->
 <div
 class="modal fade"
 id="categoria_modal"
 tabindex="-1"
 aria-labelledby="exampleModalLabel"
 aria-hidden="true"
>
 <div class="modal-dialog">
   <div class="modal-content">
     <div class="modal-header">
       <h1 class="modal-title fs-5" id="exampleModalLabel">
         Cadastro de Categoria
       </h1>
       <button
         type="button"
         class="btn-close"
         data-bs-dismiss="modal"
         aria-label="Close"
       ></button>
     </div>
     <div class="modal-body cate">
       <center>
         <div class="card-modal">
           <div class="inputBox">
             <span class="user">Nome da Categoria</span>
             <input
               type="text"
               id="nome_categoria"
               required="required"
             />
           </div>
         </div>
       </center>
     </div>
     <div class="modal-footer">
       <button type="button" class="exit" data-bs-dismiss="modal">
         Cancelar
       </button>
       <button
         type="button"
         class="enter"
         data-bs-dismiss="modal"
         onclick="cadCategoria()"
       >
         Cadastrar
       </button>
     </div>
   </div>
 </div>
</div>
<!-- -->


          <!--Modal cadastro período -->

          <div
        class="modal fade"
        id="periodo_modal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Cadastro de Período
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <center>
                <div class="card-modal">
                  <div class="inputBox">
                    <span class="user">Nome do Período</span>
                    <input type="text" id="periodo_nome" required="required" />
                  </div>
                  <div class="row">
                    <div class="col-sm">
                      <div class="inputBox">
                        <span class="user">Inicío do Período</span>
                        <input
                          type="text"
                          id="inicio_periodo"
                          required="required"
                          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" 
                        />

                      </div>
                    </div>
                    <div class="col-sm">
                      <div class="inputBox">
                        <span class="user">Fim do Período</span>
                        <input
                          type="text"
                          id="fim_periodo"
                          required="required"
                          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" 
                        />
                      </div>
                    </div>
                  </div>
                 
                </div>
              </center>
            </div>
            <div class="modal-footer">
              <button type="button" class="exit" data-bs-dismiss="modal">
                Cancelar
              </button>
              <button type="button" class="enter" data-bs-dismiss="modal" onclick="cadPeriodo()">Cadastrar</button>
            </div>
          </div>
        </div>
      </div>
          <!-- -->
          <script>

              function modalPeriodo(){
        
        var myModal = new bootstrap.Modal(
    document.getElementById("periodo_modal")
  );
  myModal.show();
};
function modalCategoria(){
                  document.getElementById("categoria")
                    var myModal = new bootstrap.Modal(
                      document.getElementById("categoria_modal")
                    );
                    myModal.show();
                }
            function modalAutor(){
var myModal = new bootstrap.Modal(
     document.getElementById("autor_modal")
   );
   myModal.show();
 }
            function modalAutorLimpo(){
              document.querySelector("#nome_autor").value = "";
  document.querySelector("#nacionalidade").value = "";
  document.querySelector("#data_nascimento").value = "";
  document.querySelector("#data_falecimento").value = "";
  document.querySelector("#biografia").value = "";
var myModal = new bootstrap.Modal(
     document.getElementById("autor_modal")
   );
   myModal.show();
 }
 function cadCategoria() {

    var categoria = document.querySelector("#nome_categoria").value;
    var url = "";
    if (categoria == null || categoria == "") {
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
 function checkInput(element) {
          if (element.value.trim() !== "") {
            element.classList.add("has-text");
          } else {
            element.classList.remove("has-text");
          }
        }

        function carregarCategorias() {
    var url = "php/categorias/categoria.php";

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            var options = "";
for(let item in data){
  options += `<option value="${data[item].tb04_nome_categoria}" name="${data[item].tb04_nome_categoria}">${data[item].tb04_nome_categoria}</option>`; // Ajuste dos campos

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
for(let item in data){
  options += `
  <option value="${data[item].tb05_nome_periodo}" name="${data[item].tb05_nome_periodo}">${data[item].tb05_nome_periodo}</option>`; // Ajuste dos campos

}
            

var selectElement = document.querySelector("#select_periodo").innerHTML = options;
        });
}

// Chame a função para carregar as categorias ao carregar a página
window.addEventListener("load", (event) => {
                  carregarCategorias();
                  carregarPeriodos();
                  carregarAutores();
      });
function carregarAutores(){
  var url = "php/autores/autor.php";

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        var contador = 1;
        var informacoes = ` <div class="col">
                <a href="#" id="link-card-livro" onclick="modalAutorLimpo()">
                  <div class="card card-equal-height" ">
                    <div class="caixa-autores d-flex align-items-center justify-content-center">
                      <i class="fas fa-plus icone seg d-flex align-items-center justify-content-center"></i>
                    </div>
                    <div class="card-body2 text-center">
                      <h7 class="card-subtitle">Adicionar</h7>
                      </a>
                    </div>
                  </div>
               
                  &nbsp &nbsp
                             </div>  `;
for(let item in data){
  contador++;
  //if (contador%6 ==0) informacoes+= '</div> <div class="row">'
  informacoes += `
            
 
    <div class="col"> 

      <div class="card-fotos card-equal-height" style="  margin-right: 200%; padding-top: 10px "> 
      <a href="telaAutores.html">
        <img src="img/autores/${data[item].tb03_foto_autor}" width="100%" style="margin-top: 20%;"class="autores" alt="Livro1" />
           <div class="card-body2">
                   
             <h5 class="card-tittle tt">${data[item].tb03_nome_autor}</h5>
           </div>  
           </a>     
           <h7 class="card-subtittle">10 publicações</h7>
    
           <div class="row">
             <div class="col">
<a href="#" onclick="editarAutor('${data[item].tb03_nome_autor}', ${data[item].tb03_id_autor}, 
'${data[item].tb03_nacionalidade}', '${data[item].tb03_nascimento}', '${data[item].tb03_obito}', 
'${data[item].tb03_biografia}', '${data[item].tb03_foto_autor}')" class="icone">
  <i class="fas fa-edit" >
      </i> &nbsp  &nbsp   &nbsp
</a>
<a href="#" onclick="apagarAutor(${data[item].tb03_id_autor}, '${data[item].tb03_nome_autor}')"class="icone">
          <i class="fas fa-trash"></i>
</a>
            </div>
             </div>
      </div>
    </div>
                   
                   
              
                  
                  
                  `
}
        

document.querySelector("#autores").innerHTML = informacoes;
    });
}

const fileInput = document.querySelector('.custom-file-upload input[type="file"]');
const fileMessage = document.querySelector('.file-message');
function handleFileChange() {
    if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        const fileExtension = fileName.split('.').pop().toLowerCase();
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'jfif']; 

        if (allowedExtensions.includes(fileExtension)) {
            fileMessage.innerHTML = `Imagem "${fileName}" enviada com sucesso!`;
            fileMessage.style.color = 'green'; 
        } else {
            fileMessage.innerHTML = 'Apenas imagens (jpg, jpeg, png, jfif) são permitidas.';
            fileMessage.style.color = 'red';
            fileInput.value = ''; 
        }

        fileMessage.style.display = 'block';
    } else {
        fileMessage.style.display = 'none';
    }
}
fileInput.addEventListener('change', handleFileChange);



function cadAutor() {
    var autor = document.querySelector("#nome_autor").value;
    var nacionalidade = document.querySelector("#nacionalidade").value;
    var nascimento = document.querySelector("#data_nascimento").value;
    var falecimento = document.querySelector("#data_falecimento").value;
    var biografia = document.querySelector("#biografia").value;
    
    var categoria = document.getElementById('select_categoria');
    var valor_categoria = categoria.options[categoria.selectedIndex].value;
    
    var periodo = document.getElementById('select_periodo');
    var valor_periodo = periodo.options[periodo.selectedIndex].value;
    var url = "";
    if(autor != null || autor != ""){
      if (cod_alt != "" && cod_alt == codd) {
        url = `php/autores/autor_editar.php?nome=${autor}&codigo=${cod_alt}&nacionalidade=${nacionalidade}
                &nascimento=${nascimento}&falecimento=${falecimento}&biografia=${biografia}
                &categoria=${valor_categoria}&periodo=${valor_periodo}`
      }
      else{
        url = `php/autores/autor_cadastro.php?nome=${autor}&nacionalidade=${nacionalidade}
                &nascimento=${nascimento}&falecimento=${falecimento}&biografia=${biografia}
                &categoria=${valor_categoria}&periodo=${valor_periodo}`
              alert(`Autor: ${autor} cadastrado com sucesso!`)
            }
           
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            alert(data.mensagem);
            carregarAutores();
        });
      }
      else{
              alert("Informe todos os dados!");
            }

}

var cod_alt =0;
  var codd = 0;
function editarAutor(nomeAutor, codigoAutor, nacionalidade, nascimento, falecimento, biografia, fotoAutor){
  cod_alt = codigoAutor;
  codd = codigoAutor;
  modalAutor();

  var dataNascimento = new Date(nascimento);
  var dataFormatadaNascimento = dataNascimento.toISOString().split("T")[0];

  var dataFalecimento = new Date(falecimento);
  var dataFormatadaFalecimento = dataFalecimento.toISOString().split("T")[0];

  document.querySelector("#nome_autor").value = nomeAutor;
  document.querySelector("#nacionalidade").value = nacionalidade;
  document.querySelector("#data_nascimento").value = dataFormatadaNascimento;
  document.querySelector("#data_falecimento").value = dataFormatadaFalecimento;
  document.querySelector("#biografia").value = biografia;

  var categoria = document.getElementById('select_categoria');
  var valor_categoria = categoria.options[categoria.selectedIndex].value;

  var periodo = document.getElementById('select_periodo');
  var valor_periodo = periodo.options[periodo.selectedIndex].value;
}

                  function apagarAutor(codigoAutor, nomeAutor){
                    var url = 'php/autores/autor_excluir.php?codigo=' + codigoAutor
if (confirm("Deseja realmente excluir:  "+ nomeAutor + "?")) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
          carregarAutores();
        })
  }
}


        
          </script>
          
</script>
<script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
      integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
      crossorigin="anonymous"
    ></script>
    <script src="bootstrap/bootstrap.js"></script>
  </body>
</html>
