
 function auth() {
    event.preventDefault();
    const email = document.getElementById('emailRegister').value;
    const senha = document.getElementById('passwordRegister').value;
    // const senhaComfirma = document.getElementById('passwordConfirma').value;

        firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(() => {
            alert("Usuario criado com sucesso!!");
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert('Problemas ao criar o usuario!' + error);
        });
        // alert("As senhas estão diferentes, digite senhas iguais")
    }   


 function authenticate() {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value

    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(() => {
            window.location.href = "index.html";
        }).catch((error) => {
            alert('Erro ao autenticar. Erro: ' + error);
        })
}

window.onload = function() {
    switchTab('login');
  }
function switchTab(tabName){
    let i, tabContent;
    tabContent = document.getElementsByClassName("container");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
      }
    document.getElementById(tabName).style.display = "flex";
}
