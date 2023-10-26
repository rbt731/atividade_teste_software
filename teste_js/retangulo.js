const Retangulo = {
    largura: 0,
    altura: 0,

    dimensoes: (largura, altura) => {

        if (largura > 0 && altura > 0) {
            this.largura = largura
            this.altura = altura
            return true
        } else {
            return false
        }
    },

    area: () => {
        return this.largura * this.altura
    },

    perimetro: () => {
        return 2 * (this.largura + this.altura)
    }
}


module.exports = Retangulo  