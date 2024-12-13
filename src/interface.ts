class Conta {
    numeroDaConta: number
    saldo: number = 0

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta
    }
}

class contaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor
    }
}

/* INTERFACES */
interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean
    taxaDeTransferencia: number
}

interface ICnpj {
    cnpj: number
}

interface IHeranca extends ICnpj {
    telefone: number
}

class contaCorrente extends Conta implements ITransacional {
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += valor - this.taxaDeTransferencia
        return true
    }
    taxaDeTransferencia: number = 0
}

const contaDoBrunoInterface: ITransacional = {
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += valor - this.taxaDeTransferencia
        return true
    },
    taxaDeTransferencia: 0
}