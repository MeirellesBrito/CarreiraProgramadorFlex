function pesquisarCep(){
    var cep = document.querySelector("#cep").value
    fetch("https://viacep.com.br/ws/"+cep+"/json/")
    .then(response => response.json())
    .then(response =>{
        alert(response.logradouro)
    })
    
}