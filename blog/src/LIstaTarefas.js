import React from 'react'

const LIstaTarefas = () => {
    const tarefas = [
        "Passear com o cachorro",
        "fazer compras",
        "fazer comidas",
        "limpar a casa",
        "Estudar",
        "observar as estreelas",
        "Assistir o jogo",
        "ir para a faculdade"
    ]
    const imagem = [
        "https://static-cse.canva.com/blob/759727/ComoTirareEditarSuaFotoparaPerfilemRedesSociaisfeaturedimagee1559023010630.994bef93.jpg",
        "https://media.istockphoto.com/id/659509240/pt/foto/hipster-girl-looking-at-sunset.jpg?s=612x612&w=0&k=20&c=K_RZshxH_I4INpmCoK1lF1ZbqGomY1BFRIBW_4PMRrw=",
        "https://static-cse.canva.com/blob/759727/ComoTirareEditarSuaFotoparaPerfilemRedesSociaisfeaturedimagee1559023010630.994bef93.jpg",
        "https://media.istockphoto.com/id/659509240/pt/foto/hipster-girl-looking-at-sunset.jpg?s=612x612&w=0&k=20&c=K_RZshxH_I4INpmCoK1lF1ZbqGomY1BFRIBW_4PMRrw="
    ]
    
    return (
        <div>
            <ul>
                {
                    tarefas.map((Tarefas,index) => (
                        <li key={index}>{Tarefas}</li>
                    ))
                }
            </ul>

            <div>
                <ul>
                    {
                        imagem.map((Imagems, index) => (
                            <img src={Imagems} width="50%" key={index}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default LIstaTarefas