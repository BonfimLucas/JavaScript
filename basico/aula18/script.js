/* function criaPessoa (nome, sobrenome, idade){
    return {nome, sobrenome , idade };
}

const pessoa1 = criaPessoa('Lucas','Bonfim',19);
const pessoa2 = criaPessoa('Maria','Medeiros',28);
const pessoa3 = criaPessoa('João','Otavio',14);
const pessoa4 = criaPessoa('Junior','Silva',34);
const pessoa5 = criaPessoa('Jean','Santos',21);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome); */

const pessoa1 = {
    nome: 'Lucas',
    sobrenome: 'Bonfim',
    idade: 19,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade(){
        this.idade++;
    },
};

pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();