/* BOOLEAN */
let estaChovendo: boolean = false
estaChovendo = true
//

/* NUMBER */
let idade: number = 30
let altura: number = 1.66
//

/* STRING */
const nacionalidade: string = 'Brasileiro'
//

/* ARRAY */
const familia: string[] = ['Oswaldo', 'Eliana', 'Bruna', 'Barbara']
const outraForma: Array<string> = ['Oswaldo', 'Eliana', 'Bruna', 'Barbara']
//

/* READ ONLY ARRAY */
const notas: ReadonlyArray<number> = [10, 7, 9, 8]
//

/* TUPLAS */
const lista: [nome: string, eleEBonito: boolean, idade: number] = ['Perry', true, 6]
//

/* UNION TYPE */
let idadeDoPerry: number | string = 6
idadeDoPerry = 'Seis anos'
//

/* ANY */
let aceitaQualquerTipo: any
aceitaQualquerTipo = 10
aceitaQualquerTipo = true
aceitaQualquerTipo = [1, 2, 3]
aceitaQualquerTipo = 'String'
//

/* IMPLICIT TYPE */
let curso = 'front-end'
