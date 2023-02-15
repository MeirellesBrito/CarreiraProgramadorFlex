// var pessoa = {
//   nome:"Meirelles Brito",
//   anoDeNacimento: 1998,
//   corFavorita: "Preta",
//   serieFavorita: "Nao tenho",
//   livroFavorito: "Lei da guerra",
//   veiculo: "Moto  bmw 310r",
//   casa: "Manaus"

  
// }

// console.log(pessoa);

// class Pessoa{
//   nome;
//   RG;
//   CPF;
//   endereco;
//   telefone;
//   dataNasc;
// }

// var pessoa = new Pessoa();
// pessoa.nome = "fernando"
// pessoa.rg = 55657751
// pessoa.CPF = 58722688774
// pessoa.endereco = "Rua x casa Y"
// pessoa.telefone = 9255574458
// pessoa.dataNasc = 1998

// console.log(pessoa);

// -----------------------------------------------------------------------------

// var anoAtual = 2023
// class Pessoa{
// nome;
// anoNacs;


// idade (anoNacs){
//  var  x =  anoAtual - anoNacs
//   return x
// }

// }
// var objetos1 = new Pessoa();
// objetos1.nome = "Fernando"
// objetos1.anoNacs = 1998
// console.log(objetos1.idade(objetos1.anoNacs));

// -----------------------------------------------------------------------------

// var anoAtual = 2023
// class Pessoa{
// nome;
// anoNacs;
// #idade;

// constructor(nome , anoNacs){
//   this.nome = nome;
//   this.anoNacs =anoNacs;
//   this.#idade = anoAtual - this.anoNacs;
// }

// exibirIdade(){
//   return this.#idade;
// }

// }
// var objetos1 = new Pessoa ("Meirelles", 1998);
// objetos1.idade = 41
// console.log(objetos1);
// -----------------------------------------------------------------------------


// class Funcionario{
//   salarioBruto;
//   descontos;
//   salarioLiquido;

//   constructor(salarioLiquido,descontos){
//     this.salarioBruto = salarioLiquido;
//     this.descontos = descontos;
//   }
//   calcularSalaruiLiquido(){
//     this.salarioLiquido = this.salarioBruto - this.descontos;
//   }
// }
// class Faxineira extends Funcionario{

// }
// class Programador extends Funcionario{
  
// }
// var faxineira = new Faxineira(2000,300)
//   faxineira.calcularSalaruiLiquido();
//   console.log(faxineira);

// var programador = new Programador(6000,3000)
//   programador.calcularSalaruiLiquido();
//   programador.linguagens = ["js","PHP","PY","java"];
//   console.log(programador);