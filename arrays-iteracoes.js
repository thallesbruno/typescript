var notasAlunos = [10, 8, 6.5, 9.5];
//índices - in
for (var i in notasAlunos) {
    console.log('Índice: ' + i);
}
//valores - of
for (var _i = 0, notasAlunos_1 = notasAlunos; _i < notasAlunos_1.length; _i++) {
    var notaAluno = notasAlunos_1[_i];
    console.log('Nota: ' + notaAluno);
}
