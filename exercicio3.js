// Função para verificar o status do aluno
function verificarStatusAluno(aluno) {
  if (aluno.nota >= 7) {
    return `${aluno.nome}: Aprovado`;
  } else if (aluno.nota >= 5) {
    return `${aluno.nome}: Recuperação`;
  } else {
    return `${aluno.nome}: Reprovado`;
  }
}

// Exemplos de entrada
const aluno1 = { nome: "Maria", nota: 8.5 };
const aluno2 = { nome: "João", nota: 6.0 };
const aluno3 = { nome: "Ana", nota: 4.0 };

// Saída esperada
console.log(verificarStatusAluno(aluno1)); // Maria: Aprovado
console.log(verificarStatusAluno(aluno2)); // João: Recuperação
console.log(verificarStatusAluno(aluno3)); // Ana: Reprovado
