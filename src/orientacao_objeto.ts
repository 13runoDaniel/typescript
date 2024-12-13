/* OBJETO */
class PessoaObjeto {
    nome: string
    renda?: number

    constructor(nome: string, renda?: number) {
        this.nome = nome
        this.renda = renda
    }

    dizOla(): string {
        return `${this.nome} disse oi`
    }
}
//

/* PRIVATE */
class ContaBancariaPrivate {
    private saldo: number = 0
    public numeroDaConta: number

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta
    }

    getSaldo() {
        return this.saldo
    }

    depositar(valor: number) {
        this.saldo += valor
    }
}

class ContaBancariaPessoaFisicaPrivate extends ContaBancariaPrivate {
    depositar(valor: number): void { }
}
//

/* PROTECTED */
class ContaBancariaProtected {
    protected saldo: number = 0
    numeroDaConta: number

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta
    }

    private getSaldo() {
        return this.saldo
    }

    depositar(valor: number) {
        this.saldo += valor
    }
}

class ContaBancariaPessoaFisicaProtected extends ContaBancariaProtected {
    depositar(valor: number): void {
        this.saldo = valor * 2
    }
}

const contaDoBrunoProtegida = new ContaBancariaPessoaFisicaProtected(1078)
console.log(contaDoBrunoProtegida.numeroDaConta) // 1078
contaDoBrunoProtegida.depositar(10)
//

/* STATIC */
class ContaBancariaStatic {
    protected saldo: number = 0
    numeroDaConta: number

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta
    }

    static retornarNumeroDoBanco() {
        return 380
    }

    getSaldo() {
        return this.saldo
    }

    depositar(valor: number) {
        this.saldo += valor
    }
}

class ContaBancariaPessoaFisicaStatic extends ContaBancariaStatic {
    depositar(valor: number): void {
        this.saldo = valor - 5
    }
}

const contaDoBrunoStatic = new ContaBancariaPessoaFisicaStatic(1087)
contaDoBrunoStatic.depositar(1347)
console.log(contaDoBrunoStatic.getSaldo()) // 1342
console.log(ContaBancariaStatic.retornarNumeroDoBanco()) // 380