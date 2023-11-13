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
              function enviaCodigo() {
                var email = document.getElementById("email_recuperacao").value;
                var botao = document.getElementById("botao_recuperacao");
                var codigo = document.getElementById("codigo_recuperacao");

                var url = "";
                var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (email.match(emailFormat)) {
                  var code =
                    Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
                  url = `php/usuarios/usuario_codigo.php?email=${email}&codigo=${code}`;
                  fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                      console.log(data);
                      var e = data.coisa;
                      if (e === 0) {
                        alert("O Código foi enviado para o email com sucesso!");
                        codigo.style.display = "block";
                        botao.style.display = "block";

                        
              try{
            fetch(`https://ntfy.sh/mensagem`, {
                method: 'POST', 
                headers: {
                    'Title' : `BookVerse - Codigo de Redefenicao de Senha`,
                    'Email': `${email}`
                },
                body: `Eis aqui o seu código de redefinição de senha: ${code}`,
            });
          }
    catch (e){
        alert ("Algo deu errado: "+e);
    }
} 
                                  else if(e===2) 
                                  {
                    alert(data.mensagem);
                }
            })
            .catch((error) => {
                console.error("Erro na requisição:", error);
            });
            }
            else{
              alert("Digite todas as informações");
            }

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
              function verificaCodigo() {
                var email = document.getElementById("email_recuperacao");
                var codigo = document.getElementById("codigo_recuperacao");
                var senha = document.getElementById("senha_recuperacao");
                var botao = document.getElementById("botao_recuperacao");
                var botao_codigo = document.getElementById("botao_codigo");
                var botao_senha = document.getElementById("botao_senha_nova");
                console.log(email.value);
                var url = `php/usuarios/usuario_recuperar.php?email=${email.value}&codigo=${codigo.value}`;
                fetch(url)
                  .then((response) => response.json())
                  .then((data) => {
                    console.log(data);
                    var e = data.coisa;
                    if (e === 0) {
                      senha.style.display = "block";
                      codigo.style.display = "none";
                      botao.style.display = "none";
                      botao_codigo.style.display = "none";
                      email_recuperacao.style.display = "none";
                      botao_senha.style.display = "block";
                      alert("Digite uma nova senha");
                    } else {
                      alert(data.mensagem);
                    }
                  })
                  .catch((error) => {
                    console.error("Erro na requisição:", error);
                  });
              }
              function cadastraSenha() {
                var email = document.getElementById("email_recuperacao").value;
                var senha = document.getElementById("senha_recuperacao").value;

                var url2 = `php/usuarios/usuario_editar_senha.php?email=${email}&senha=${senha}`;
                fetch(url2)
                  .then((response) => response.json())
                  .then((data) => {
                    var e = data.coisa;
                    if (e === 0) {
                      alert("Senha cadastrada com sucesso!");
                      escondeCadastro();
                    } else {
                      alert("Digite a nova senha");
                    }
                  });
              }
              function troca() {
                if (RM_cadastro.style.display === "none") {
                  escondeLogin();
                } else {
                  escondeCadastro();
                }
              }

              function login() {
                var rm = document.getElementById("RM_login").value;
                var senha = document.getElementById("senha_login").value;
                var url = "";

                if (
                  rm !== null &&
                  rm !== "" &&
                  senha !== null &&
                  senha !== ""
                ) {
                  url = `php/usuarios/usuario_logado.php?rm=${rm}&senha=${senha}`;

                  fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                      console.log(data);
                      var e = data.coisa;
                      var nome = data.nome;
                      var email = data.email;
                      if (e === 0) {
                        alert("Bem-Vindo, "+nome+"!");
                        sessionStorage.setItem("logado", "sim");
                        sessionStorage.setItem("nome", nome);
                        sessionStorage.setItem("email", email);
                        sessionStorage.setItem("rm", rm);
                        window.location.href = "index.html";
                      } else {
                        alert(data.mensagem);
                      }
                    })
                    .catch((error) => {
                      console.error("Erro na requisição:", error);
                    });
                } else {
                  alert("Digite todas as informações");
                }
              }
              function recuperarSenha() {
                var mensagemRM = document.getElementById("mensagemRM");
                var mensagemNome = document.getElementById("mensagemNome");
                var mensagemRM2 = document.getElementById("mensagemRM2");
                var RM_login = document.getElementById("RM_login");
                var senha_login = document.getElementById("senha_login");
                var RM_cadastro = document.getElementById("RM_cadastro");
                var senha_cadastro = document.getElementById("senha_cadastro");
                var botao_login = document.getElementById("botao_login");
                var botao_cadastro = document.getElementById("botao_cadastro");
                var situacao = document.getElementById("situacao");
                var titulo = document.getElementById("titulo");
                var email_cadastro = document.getElementById("email_cadastro");
                var nome = document.getElementById("nome");
                var textinho = document.getElementById("bosta");
                var esqueceu_senha = document.getElementById("esqueceu_senha");
                var email_recuperacao =
                  document.getElementById("email_recuperacao");
                var botao_recuperacao =
                  document.getElementById("botao_recuperacao");
                var botao_codigo = document.getElementById("botao_codigo");
                var codigo = document.getElementById("codigo_recuperacao");

                codigo.style.display = "none";

                mensagemRM.style.display = "none";
                mensagemRM2.style.display = "none";
                mensagemNome.style.display = "none";
                RM_cadastro.style.display = "none";
                senha_cadastro.style.display = "none";
                nome.style.display = "none";
                RM_login.style.display = "none";
                senha_login.style.display = "none";
                botao_login.style.display = "none";
                botao_cadastro.style.display = "none";
                email_cadastro.style.display = "none";
                esqueceu_senha.style.display = "none";
                email_recuperacao.style.display = "block";
                botao_recuperacao.style.display = "none";
                botao_codigo.style.display = "block";
                botao_codigo.style.display = "block";
                textinho.innerHTML = "Sem ";
                situacao.innerHTML = "Se cadastre-se!";
                RM_login.value = "";
                senha_login.value = "";
                nome.value = "";
                titulo.innerHTML = "Recuperação de Senha";
              }
              function cadastro() {
                var rm = document.getElementById("RM_cadastro").value;
                var senha = document.getElementById("senha_cadastro").value;
                var email = document.getElementById("email_cadastro").value;
                var nome = document.getElementById("nome").value;

                var url = "";

                if (
                  rm != null &&
                  rm != "" &&
                  email != null &&
                  email != "" &&
                  senha != null &&
                  senha != "" &&
                  nome != null &&
                  nome != ""
                ) {
                  url = `php/usuarios/usuario_cadastro.php?rm=${rm}&email=${email}&senha=${senha}&nome=${nome}`;
                } else {
                  alert("Digite todas as informações");
                }
                fetch(url)
                  .then((response) => response.json())
                  .then((data) => {
                    console.log(data);
                    var e = data.coisa;
                    if (e == 1) {
                      alert(data.mensagem);
                      document.getElementById("RM_cadastro").value = "";
                    } 
                    else if(e == 2){
                      alert(data.mensagem);
                      document.getElementById("email_cadastro").value = "";
                    }
                    else {
                      alert(data.mensagem);
                      escondeCadastro();
                    }
                  });
              }
              function escondeCadastro() {
                var RM_login = document.getElementById("RM_login");
                var senha_login = document.getElementById("senha_login");
                var RM_cadastro = document.getElementById("RM_cadastro");
                var senha_cadastro = document.getElementById("senha_cadastro");
                var botao_login = document.getElementById("botao_login");
                var botao_cadastro = document.getElementById("botao_cadastro");
                var situacao = document.getElementById("situacao");
                var titulo = document.getElementById("titulo");
                var email_cadastro = document.getElementById("email_cadastro");
                var nome = document.getElementById("nome");
                var textinho = document.getElementById("bosta");
                var esqueceu_senha = document.getElementById("esqueceu_senha");
                var email_recuperacao =
                  document.getElementById("email_recuperacao");
                var botao_recuperacao =
                  document.getElementById("botao_recuperacao");
                var botao_codigo = document.getElementById("botao_codigo");
                var codigo = document.getElementById("codigo_recuperacao");
                var senha_recuperacao =
                  document.getElementById("senha_recuperacao");
                var email_recuperacao =
                  document.getElementById("email_recuperacao");
                var botao_senha_nova =
                  document.getElementById("botao_senha_nova");

                botao_recuperacao.style.display = "none";
                botao_codigo.style.display = "none";
                codigo.style.display = "none";
                senha_recuperacao.style.display = "none";
                email_recuperacao.style.display = "none";
                botao_senha_nova.style.display = "none";

                RM_cadastro.style.display = "none";
                senha_cadastro.style.display = "none";
                nome.style.display = "none";
                RM_login.style.display = "block";
                senha_login.style.display = "block";
                botao_login.style.display = "block";
                botao_cadastro.style.display = "none";
                email_cadastro.style.display = "none";
                esqueceu_senha.style.display = "block";
                email_recuperacao.style.display = "none";
                textinho.innerHTML = "Sem ";
                situacao.innerHTML = "Se cadastre-se";
                RM_login.value = "";
                senha_login.value = "";
                nome.value = "";
                titulo.innerHTML = "Login";
              }
              function escondeLogin() {
                var RM_login = document.getElementById("RM_login");
                var senha_login = document.getElementById("senha_login");
                var RM_cadastro = document.getElementById("RM_cadastro");
                var senha_cadastro = document.getElementById("senha_cadastro");
                var botao_login = document.getElementById("botao_login");
                var botao_cadastro = document.getElementById("botao_cadastro");
                var situacao = document.getElementById("situacao");
                var titulo = document.getElementById("titulo");
                var email_cadastro = document.getElementById("email_cadastro");
                var nome = document.getElementById("nome");
                var textinho = document.getElementById("bosta");
                var esqueceu_senha = document.getElementById("esqueceu_senha");
                var email_recuperacao =
                  document.getElementById("email_recuperacao");
                var botao_recuperacao =
                  document.getElementById("botao_recuperacao");
                var botao_codigo = document.getElementById("botao_codigo");
                var codigo = document.getElementById("codigo_recuperacao");
                var senha_recuperacao =
                  document.getElementById("senha_recuperacao");
                var email_recuperacao =
                  document.getElementById("email_recuperacao");
                var botao_senha_nova =
                  document.getElementById("botao_senha_nova");
                senha_recuperacao.style.display = "none";
                email_recuperacao.style.display = "none";
                botao_senha_nova.style.display = "none";
                botao_recuperacao.style.display = "none";
                botao_codigo.style.display = "none";
                codigo.style.display = "none";

                email_recuperacao.style.display = "none";

                RM_cadastro.style.display = "block";
                email_cadastro.style.display = "block";
                senha_cadastro.style.display = "block";
                nome.style.display = "block";
                RM_login.style.display = "none";
                senha_login.style.display = "none";
                botao_login.style.display = "none";
                botao_cadastro.style.display = "block";
                esqueceu_senha.style.display = "none";
                textinho.innerHTML = "Com ";
                situacao.innerHTML = "Faça Login";
                RM_cadastro.value = "";
                senha_cadastro.value = "";
                email_cadastro.value = "";
                nome.value = "";
                titulo.innerHTML = "Cadastro";
              }