let notasAlunos: number[] = [10, 8, 6.5, 9.5];

//índices - in
for (let i in notasAlunos){
    console.log('Índice: ' + i);
}

//valores - of
for (let notaAluno of notasAlunos){
    console.log('Nota: ' + notaAluno);
}