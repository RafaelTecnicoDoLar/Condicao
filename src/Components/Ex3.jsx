import { useState } from "react";

function Ex3() {

    const [nome, setNome] = useState();

    function BotaoEnviar() {
        alert(`Saudações, seu nome é ${nome}`);

    }
    return (
        <div className="Exercicio">
            <p>
                Ex3 = Irei descobrir seu nome!

            </p>

            <input type='text' name="Primeiro Nome" placeholder="Primeiro Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>

            <button onClick={BotaoEnviar}> Enviar</button>

        </div>

    )
}
export default Ex3;