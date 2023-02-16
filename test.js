// class Funcionario{
//     constructor(salario,cargo){
//         this.salario = salario
//         this.cargo = cargo
//     }
//     calcularSalario(funcionarios) {
//         let soma = 0;
//         funcionarios.forEach(function(funcionario) {
//           soma += funcionario.salario;
//         });
//         return soma;
//     }
// }
// var funcionarios = [     
//     Funcionario(3000, "Programador dev2 "),
//     Funcionario(4000, "Programador dev3 "),
//     Funcionario(5000, "Programador dev4 "),    
//     Funcionario(6000, "Programador dev2 "),   
//     Funcionario(7000, "Programador dev2 "),
//     Funcionario(8000, "Programador dev2 "),
//     Funcionario(9000, "Programador dev2 "),
//     Funcionario(10000, "Programador dev2 "),
//     Funcionario(11000, "Programador dev2 "),
//     Funcionario(12000, "Programador dev2 "),
// ]

// console.log(Funcionario.calcularSalario(funcionarios));

// class Funcionario {
//     constructor(salario, cargo) {
//       this.salario = salario;
//       this.cargo = cargo;
//     }
//     static calcularSalario(funcionarios) {
//       let soma = 0;
//       funcionarios.forEach(function(funcionario) {
//         soma += funcionario.salario;
//       });
//       return soma;
//     }
// }
// class Programador extends Funcionario{

// }

// var programador = new Programador (
// programador(3000, "Programador dev2 "),
// programador(4000, "Programador dev3 "),
// programador(5000, "Programador dev4 "),
// programador(6000, "Programador dev2 "),
// programador(7000, "Programador dev2 "),
// programador(8000, "Programador dev2 "),
// programador(9000, "Programador dev2 "),
// programador(10000, "Programador dev2 "),
// programador(11000, "Programador dev2 "),
// programador(12000, "Programador dev2 "),
// );
// console.log(Funcionario.calcularSalario(programador));
  

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
