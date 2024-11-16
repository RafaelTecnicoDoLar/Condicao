function Ex1() {
    let qntBala;
    qntBala = 7;

    let tela;
    if (qntBala >= 2) {
        tela = `temos ${qntBala} balas, vamos dividir?`
        qntBala = (qntBala - 1)

    } else {
        tela = `Ce é loco, só tenho ${qntBala} balas, vo come tudo sozinho`

    }

    return (
        <div className="Exercicio">
            <p>
                Ex1 = {tela}

            </p>
        </div>


    )
}
export default Ex1;