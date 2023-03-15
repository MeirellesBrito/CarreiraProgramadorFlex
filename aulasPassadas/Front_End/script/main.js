function pesquisarCep(){
    document.querySelector("#spinner").style.display = "block";
    var cep = document.querySelector("#cepDigitado").value
    fetch("https://viacep.com.br/ws/"+cep+"/json/")
    .then(response => response.json())
    .then(response => {
            document.querySelector("#listagem").insertAdjacentHTML("beforeEnd",
            `<tr>
                <td>${response.cep}</td>
                <td>${response.logradouro}</td>
                <td>${response.complemento}</td>
                <td>${response.bairro}</td>
                <td>${response.cidade}</td>
                <td>${response.estado}</td>
            </tr>`)
            document.querySelector("#spinner").style.display = "none";
        }).catch((erro) => {
            alert(erro);
    })
    
    
}