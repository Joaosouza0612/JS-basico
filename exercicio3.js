function verificarStatusAluno(aluno) {
  if (aluno.nota >= 7) {
    return `${aluno.nome} está Aprovado`;
  } else if (aluno.nota >= 5) {
    return `${aluno.nome} está em Recuperação`;
  } else {
    return `${aluno.nome} está Reprovado`;
  }
}
const aluno1 = { nome: "Murilo", nota: 8.5 };
const aluno2 = { nome: "Ana", nota: 6 };
const aluno3 = { nome: "Pedro", nota: 3 };

console.log(verificarStatusAluno(aluno1)); 
console.log(verificarStatusAluno(aluno2)); 
console.log(verificarStatusAluno(aluno3)); 
