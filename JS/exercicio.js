// . Criar uma classe venda com os valores dos produtos daquela venda. No final exibir o valor total da venda.
class venda{
    produdor;

    constructor(valor){
        this.produdor = valor
    }

    calcularVendas(){
        let soma = 0
        this.produdor.forEach(function(valor){
            soma+= valor;
        });
        return soma;
    }
}
var Venda = new venda([80,70,5]);
// console.log("Valor do Produtor "+ Venda.calcularVendas()) 


// 2. Criar uma classe funcionário com os atributos salário e cargo. Criar 10 objetos da classe funcionário e exibir a soma do salário dos funcionários de cargo Programador

class Funcionario {
  constructor(salario, cargo) {
    this.salario = salario;
    this.cargo = cargo;
  }
}
let funcionarios = ([
  new Funcionario(3000, "Gerente de Projetos"),
  new Funcionario(2500, "Analista de Sistemas"),
  new Funcionario(2000, "Desenvolvedor"),
  new Funcionario(3500, "Marketing Manager"),
  new Funcionario(2800, "Analista de Sistemas"),
  new Funcionario(2200, "Analista de Sistemas"),
  new Funcionario(4000, "Gerente de Projetos"),
  new Funcionario(4500, "Programador"),
  new Funcionario(2700, "Desenvolvedor"),
  new Funcionario(5000, "Gerente de Projetos")
]);


let totalSalarioProgramador = funcionarios.reduce((total, funcionario) => {
  if (funcionario.cargo === "Programador") {
    return total + funcionario.salario;
  } else {
    return total;
  }
});

// console.log("A soma dos salários dos Programadores e : "+ totalSalarioProgramador);


// 3. Criar duas classes, uma para Icarro e outra para moto. As classes devem ter os atributos velocidadeAtual e velocidadeMaxima. Elas devem ter um método que irá acelear, outro que irá freiar. Caso o freiar seja chamado, a velocidadeAtual deve ser zero. Caso
// o acelerar seja chamado, a velocidadeAtual deverá ser a velocidadeAtual + 10, desde que não ultrapasse a velocidade máxima. Usar conceito de herança, se necessário.

class Veiculo {
  velocidadeAtual = 0;
  velocidadeMaxima = 15;

  acelerar() {
    if ((this.velocidadeAtual + 10) <= this.velocidadeMaxima){
      this.velocidadeAtual = this.velocidadeAtual + 10;
    }else{
      this.velocidadeAtual = this.velocidadeMaxima;
    }
  }
  frear(){

  }
}
class Carro extends Veiculo{
  
}
class Moto extends Veiculo{
  
}

var audi = new Carro ();
audi.acelerar();
console.log(audi.velocidadeAtual);
// 4. Criar uma classe turma que deve ter um atributo com os alunos daquela turma. No atributo alunos deve ser guardado vários objetos de uma outra classe chamada aluno. Dentro da classe aluno tem que guardar o nome e a média final do aluno. Criar um objeto
// da classe turma, preencher os alunos e exibir o nome do aluno com média maior que 7.
class Turma{
  alunos = [];

}
class aluno{
  nome ;
  media;
}