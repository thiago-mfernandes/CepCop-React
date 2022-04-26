import InputPadrao  from "src/components/UI/Input/InputPadrao";
import Container from "../Container";
import styled from 'styled-components';
import {cinzaEscuro} from '../../UI/variaveis';
import Output from "src/components/UI/Output/Index";

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
            <Container borderBottom=''>
                <Conteudo>
                    Mostrar
                </Conteudo>
                <Output valor={10} /> {/*mockar o dado aqui*/}
                <Conteudo>
                    entradas
                </Conteudo>
            </Container>
        </>
    );
}

export default Buscar;
