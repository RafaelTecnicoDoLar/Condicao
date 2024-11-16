function Ex1() {
    let qntBala;
    qntBala = 7;

    let tela;
    if (qntBala >= 2) {
        tela = "vamos dividir?"
        qntBala = (qntBala - 1)

    }else {
        tela = "comi tudo sozinho"

    }

    return (
            <p>
               Ex1 = {tela}

            </p>

    )
}
export default Ex1;