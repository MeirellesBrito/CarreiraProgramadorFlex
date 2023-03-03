function pesquisarCep(){

    var cep = document.querySelector("#cepDigitado").value
    fetch("https://viacep.com.br/ws/"+cep+"/json/")
    .then(response => response.json())
    .then(response => {
            document.querySelector("#cep").innerText = response.cep
            document.querySelector("#logradouro").innerText = response.logradouro
            document.querySelector("#complemento").innerText = response.complemento
            document.querySelector("#bairro").innerText = response.bairro
            document.querySelector("#cidade").innerText = response.localidade
            document.querySelector("#estado").innerText = response.uf
        }).catch((erro) => {
            alert(erro);
    })
    
    
}