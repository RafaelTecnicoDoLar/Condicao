import { useState } from "react";

function Ex3() {

    const [tela, setTela] = useState();
    let nome;

    function BotaoEnviar() {
        alert("seu nome é: " + { nome });
        setTela(nome);

    }
    return (
        <div className="Exercicio">
            <p>
                Ex3 = Irei descobrir seu nome!

            </p>

            <input type='text' placeholder="Primeiro Nome" value={nome} />

            <button onClick={BotaoEnviar}> Enviar</button>

            <p>
                Seu nome é: {tela}
            </p>
        </div>

    )
}
export default Ex3;