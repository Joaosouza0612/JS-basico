function verificarStatusAluno(aluno) {
  let status = "";

  if (aluno.nota >= 7) {
    status = "Aprovado";
  } else if (aluno.nota >= 5) {
    status = "Recuperação";
  } else {
    status = "Reprovado";
  }

  return `${aluno.nome}: ${status}`;
}
console.log(verificarStatusAluno({ nome: "Maria", nota: 8.5 }));
