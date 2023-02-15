class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    falar() {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
  }
  
  const pessoa1 = new Pessoa("João", 25);
  pessoa1.falar();

  /*
  Neste exemplo, a classe Pessoa tem um construtor que recebe um nome e uma idade e os atribui às propriedades da instância
    criada (this.nome e this.idade). Também há um método falar() que imprime uma mensagem na console usando os valores das 
    propriedades da instância.Em seguida, criamos uma instância da classe Pessoa chamada "pessoa1" com o nome "João" e a idade "25",
     e chamamos o método falar() na instância. Isso imprimirá a mensagem "Olá, meu nome é João e eu tenho 25 anos." na console.
 */

// ----------------------------------------------------------------------

class Animal {
    constructor(nome, tipo) {
      this.nome = nome;
      this.tipo = tipo;
    }
  
    fazerSom() {
      console.log(`O ${this.tipo} ${this.nome} faz um som.`);
    }
  }
  
  class Cachorro extends Animal {
    constructor(nome) {
      super(nome, "cachorro");
    }
  
    abanarRabo() {
      console.log(`${this.nome} abana o rabo.`);
    }
  }
  
  class Gato extends Animal {
    constructor(nome) {
      super(nome, "gato");
    }
  
    arranhar() {
      console.log(`${this.nome} arranha.`);
    }
  }
  
  const cachorro1 = new Cachorro("Rex");
  cachorro1.fazerSom(); // imprime "O cachorro Rex faz um som."
  cachorro1.abanarRabo(); // imprime "Rex abana o rabo."
  
  const gato1 = new Gato("Frajola");
  gato1.fazerSom(); // imprime "O gato Frajola faz um som."
  gato1.arranhar(); // imprime "Frajola arranha."
  
/*
Neste exemplo, temos três classes: a classe Animal, que é a classe base, e as classes Cachorro e Gato, que são subclasses da classe Animal.
As subclasses herdam as propriedades e métodos da classe Animal usando a palavra-chave "extends". A classe Animal tem um construtor que define
duas propriedades (nome e tipo) e um método fazerSom() que imprime uma mensagem na console.As subclasses Cachorro e Gato têm seus próprios
construtores que chamam o construtor da classe base usando a palavra-chave "super". 
Eles também têm seus próprios métodos personalizados (abanarRabo() e arranhar(), respectivamente) que imprimem mensagens na console.
Em seguida, criamos duas instâncias das classes Cachorro e Gato (cachorro1 e gato1) e chamamos os métodos fazerSom() e os métodos
personalizados na instância correspondente. Isso imprimirá as mensagens corretas na console.
Espero que este exemplo mais completo ajude a entender melhor como o JavaScript orientado a objetos funciona!

*/