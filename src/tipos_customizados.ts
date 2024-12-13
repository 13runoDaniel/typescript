/* TYPE */
type aluno = {
    nome: string,
    cursos?: string[],
    idade: number
}

const alunos: aluno[] = [
    {
        nome: 'Bruno',
        cursos: ['Front-end,', 'Back-end'],
        idade: 30
    },
    {
        nome: 'Eliana',
        cursos: ['Pedagogia'],
        idade: 52
    }
]

alunos.push({
    nome: 'Perry',
    cursos: ['Dormir'],
    idade: 6
})

const objetoDeAluno: aluno = {
    nome: 'Oswaldo',
    idade: 61
}

function exibirAluno(aluno: aluno) {
    console.log(aluno.nome)
}