// Definindo uma classe Pessoa
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
  // Definindo uma classe Animal
  class Animal {
    constructor(nome, tipo) {
      this.nome = nome;
      this.tipo = tipo;
    }
  }
  
  // Definindo uma classe Cachorro que herda de Animal
  class Cachorro extends Animal {
    latir() {
      console.log(`${this.nome} está latindo!`);
    }
  }
  
  // Definindo uma classe Gato que herda de Animal
  class Gato extends Animal {
    miar() {
      console.log(`${this.nome} está miando!`);
    }
  }
  
  // Definindo uma classe Matematica com um método estático
  class Matematica {
    static somar(a, b) {
      return a + b;
    }
  }
  
  // Criando instâncias das classes
  const pessoa = new Pessoa("João", 30);
  const cachorro = new Cachorro("Rex", "Cachorro");
  const gato = new Gato("Whiskers", "Gato");
  
  // Chamando métodos
  pessoa.apresentar();
  cachorro.latir();
  gato.miar();
  
  // Chamando método estático
  const resultadoSoma = Matematica.somar(5, 3);
  console.log(`A soma de 5 e 3 é ${resultadoSoma}.`);
  