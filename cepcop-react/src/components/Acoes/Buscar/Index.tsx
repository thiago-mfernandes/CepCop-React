import InputPadrao  from "src/components/UI/Input/InputPadrao";
import Container from "../Container";
import { BotaoCadastrar } from "src/components/UI/Botao/BotaoCadastrar";

function Buscar() {
    return (
        <>
            <InputPadrao
                type='text' 
                placeholder='Pesquise...'
                name=''
                ariaDescribedby=''
            />
            <BotaoCadastrar>oi</BotaoCadastrar>
            <Container>
                <p className="bloco-adicionarBuscar__container___conteudo">
                    Mostrar
                </p>
                <div className="output-bloco-busca">10</div>
                <p className="bloco-adicionarBuscar__container___conteudo">
                    entradas
                </p>
            </Container>
        </>
    );
}

export default Buscar;
