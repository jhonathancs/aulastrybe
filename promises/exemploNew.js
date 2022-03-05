var Pessoa = function(nome, email) {
    console.log("criando nova pessoa");
    console.log(typeof(this));
    this.nome =  nome;
    this.email = email;
}


var joao = new Pessoa("João da Silva",  "joao@da.silva"); // criando nova pessoa, object
console.log(joao.nome); // João da Silva
console.log(joao.email); // joao@da.silva

//Quando usado, o new cria um novo objeto e o atribui a palavra chave this de dentro do escopo da função invocada. Podemos então adicionar atributos a esse objeto