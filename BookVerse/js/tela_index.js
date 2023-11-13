
      
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
                                                           function passaTela(){
                                                       var pesquisa = document.getElementById('pesquisa').value;
                                                       sessionStorage.setItem('pesquisa',pesquisa);
                                         window.location.href="livros.html?pesquisa="+pesquisa;            
                                         }
                                               var logado = "";
                                               window.addEventListener("load", (event) => {
                                                 carregaSalas();
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
                                                       alert(data.mensagem);
                                                       sessionStorage.clear();
                                                       sessionStorage.setItem("logado", "nao");
                                                       location.reload();
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
                                               function carregaSalas(){
                                                var url = "php/salas/sala.php";
                                                var informacoes = `<div
                                              class="row col-main"
                                              style="padding-bottom: 80px; padding-top: 100px">
                                              <h1 class="linha-baixo1">Lista de salas</h1>`;
                                                fetch(url)
                                                  .then((response) => response.json())
                                                  .then((data) => {
                                      
                                      
                                                    var nome =""
                                                    for(item in data){
                                                     if(data[item].tb06_nome  != nome){
                                                      if(nome != ""){
                                                        informacoes +=    `         </ul>
                                                </div>
                                              </div>`
                                                      }
                                                      informacoes += `
                                              <div class="col-md-3">
                                                <div class="card salas">
                                                  <div class="card-header salinhas">${data[item].tb06_nome}</div>
                                                  <ul class="list-group list-group-flush">`
                                                    nome = data[item].tb06_nome ;
                                                     }
                                                     informacoes += `
                                                    <a href="telaSala.html?codigo=${data[item].tb06_id}">
                                                      <li class="list-group-item">${data[item].tb06_ano}</li>
                                                    </a>
                                      
                                                    `
                                          }
                                          informacoes +=    `         </ul>
                                                </div>
                                              </div>`
                                          document.querySelector("#salas").innerHTML = informacoes;
                                      
                                                  });
                                      
                                              }
                                      
                                      
                                      
                                              function carregaSalasantigo(){
                                                var url = "php/salas/sala.php";
                                                var informacoes = "";
                                                fetch(url)
                                                  .then((response) => response.json())
                                                  .then((data) => {
                                                    for(item in data){
                                                     if(infi)
                                                    informacoes += `<div
                                              class="row col-main"
                                              style="padding-bottom: 80px; padding-top: 100px">
                                              <h1 class="linha-baixo1">Lista de salas</h1>
                                              <div class="col-md-4">
                                                <div class="card salas">
                                                  <div class="card-header fundamental">Fundamental 1</div>
                                                  <ul class="list-group list-group-flush">
                                                    <a href="telaSala.html?codigo=${data[item].tb06_id}">
                                                      <li class="list-group-item">1° Ano</li>
                                                    </a>
                                                    <a href="telaSala.html?codigo=${data[item].tb06_id}">
                                                      <li class="list-group-item">2° Ano</li>
                                                    </a>
                                                    <a href="telaSala.html?codigo=${data[item].tb06_id}">
                                                      <li class="list-group-item">3° Ano</li>
                                                    </a>
                                                    <a href="telaSala.html?codigo=${data[item].tb06_id}">
                                                      <li class="list-group-item">4° Ano</li>
                                                    </a>
                                                    <a href="telaSala.html?codigo=${data[item].tb06_id}">
                                                      <li class="list-group-item">5° Ano</li>
                                                    </a>
                                                  </ul>
                                                </div>
                                              </div>
                                              <div class="col-md-4">
                                                <div class="card salas">
                                                  <div class="card-header fundamental2">Fundamental 2</div>
                                                  <ul class="list-group list-group-flush">
                                                    <a href="telaSala.html?codigo=${data[item].tb06_id}">
                                                      <li class="list-group-item">6° Ano</li>
                                                    </a>
                                                    <a href="telaSala.html?codigo=${data[item].tb06_id}">
                                                      <li class="list-group-item">7° Ano</li>
                                                    </a>
                                                    <a href="telaSala.html?codigo=${data[item].tb06_id}">
                                                      <li class="list-group-item">8° Ano</li>
                                                    </a>
                                                    <a href="telaSala.html?codigo=${data[item].tb06_id}">
                                                      <li class="list-group-item">9° Ano</li>
                                                    </a>
                                                  </ul>
                                                </div>
                                              </div>
                                              <div class="col-md-4">
                                                <div class="card salas">
                                                  <div class="card-header medio">Ensino Médio</div>
                                                  <ul class="list-group list-group-flush">
                                                    <a href="telaSala.html?codigo=${data[item].tb06_id}">
                                                      <li class="list-group-item">1° Ano</li>
                                                    </a>
                                                    <a href="telaSala.html?codigo=${data[item].tb06_id}">
                                                      <li class="list-group-item">2° Ano</li>
                                                    </a>
                                                    <a href="telaSala.html?codigo=${data[item].tb06_id}">
                                                      <li class="list-group-item">3° Ano</li>
                                                    </a>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>`;
                                          }
                                          document.querySelector("#salas").innerHTML = informacoes;
                                      
                                                  });
                                      
                                              }