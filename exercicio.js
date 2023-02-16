// . Criar uma classe venda com os valores dos produtos daquela venda. No final
// exibir o valor total da venda.
class venda{
    produdor;

    constructor(valor){
        this.produdor = valor
    }

    calcularVendas(){
        let soma = 0
        this.produdor.forEach(function(valor){
            soma= soma + valor;
        });
        return soma;
    }
}
var Venda = new venda([80,70,5]);
// console.log("Valor do Produtor "+ Venda.calcularVendas()) 




// 2. Criar uma classe funcionário com os atributos salário e cargo. Criar 10 objetos
// da classe funcionário e exibir a soma do salário dos funcionários de cargo Programador
class Funcionario {
    constructor(salario, cargo) {
      this.salario = salario;
      this.cargo = cargo;
    }
    calcularSalario() {
      return this.salario;
    }
  }
  
  class Programador extends Funcionario {
    constructor(salario, cargo, Salario) {
      super(salario, cargo);
      this.Salario = Salario;
    }
    calcularSalario() {
      return this.salario + this.Salario;
    }
  }
  
  var programador = new Programador(
    3000, "Programador dev2 ",
    4000, "Programador dev3 ",
    5000, "Programador dev4 ",    
    6000, "Programador dev2 ",   
    7000, "Programador dev2 ",
    8000, "Programador dev2 ",
    9000, "Programador dev2 ",
    10000, "Programador dev2 ",
    11000, "Programador dev2 ",
    12000, "Programador dev2 "
    );
  console.log(programador.calcularSalario());
  


// 3. Criar duas classes, uma para Icarro e outra para moto. As classes devem ter os
// atributos velocidadeAtual e velocidadeMaxima. Elas devem ter um método que irá acelear,
// outro que irá freiar. Caso o freiar seja chamado, a velocidadeAtual deve ser zero. Caso
// o acelerar seja chamado, a velocidadeAtual deverá ser a velocidadeAtual + 10, desde que
// não ultrapasse a velocidade máxima. Usar conceito de herança, se necessário.
// 4. Criar uma classe turma que deve ter um atributo com os alunos daquela turma. No
// atributo alunos deve ser guardado vários objetos de uma outra classe chamada aluno.
// Dentro da classe aluno tem que guardar o nome e a média final do aluno. Criar um objeto
// da classe turma, preencher os alunos e exibir o nome do aluno com média maior que 7.