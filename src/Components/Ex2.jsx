function Ex2() {

    let Nota1 = 5;
    let Nota2 = 0;
    let Nota3 = 3;
    let Nota4 = 8;

    let media;

    let tela;

    media = ((Nota1 + Nota2 + Nota3 + Nota4) / 4);

    if (media >= 5 && media <=6) {
        tela = "Passou de ano raspando"

    } else if (media >= 7) {
        tela = "Passou de ano tranquilo, vai ver papai noel"

    } else {
        tela = "REPROVADO! VAI FICAR FAZENDO TAREFA NO DIA DO NATAL"

    }

    return (
        <div>
            <p>
                Ex2 = {tela} tirou {media} de nota no 5° conceito
            </p>

        </div>

    );
}

export default Ex2;