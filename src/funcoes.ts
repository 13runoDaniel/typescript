/* FUNCTION */
function calcularArea(base: number, altura: number): number {
    return base * altura
}
//

/* ARROW */
const calcularArea1 = (base: number, altura: number): number => { return base * altura }
//

function somar(...numeros: number[]): void {
    console.log(numeros)
}

function stringOuNumber(): string | number {
    if (10 > 5) {
        return 'Dez é maior do que cinco'
    } else {
        return 5
    }
}

const resultadoDoTeste = stringOuNumber()