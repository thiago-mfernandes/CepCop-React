import InputPadrao  from "src/components/UI/Input/InputPadrao";
import Container from "../Container";
import styled from 'styled-components';
import {cinzaEscuro} from '../../UI/variaveis';

const Conteudo = styled.p`
    color: ${cinzaEscuro};
    font-size: 1rem;
    font-style: italic;
    font-weight: lighter;
`;

function Buscar() {
    return (
        <>
            <InputPadrao
                type='text' 
                placeholder='Pesquise...'
                name=''
                ariaDescribedby=''
            />
            <Container>
                <Conteudo>
                    Mostrar
                </Conteudo>
                <div className="output-bloco-busca">10</div>
                <Conteudo>
                    entradas
                </Conteudo>
            </Container>
        </>
    );
}

export default Buscar;
